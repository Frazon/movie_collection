package com.movie.moviecollection.service;

import com.movie.moviecollection.entity.Movie;
import com.movie.moviecollection.repository.MovieRepository;
import org.springframework.stereotype.Service;
import com.movie.moviecollection.dto.CreateMovieRequest;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Movie createMovie(CreateMovieRequest request) {

        Movie existingMovie = movieRepository
                .findByBarcode(request.getBarcode())
                .orElse(null);

        if (existingMovie != null) {
            throw new RuntimeException("Já existe um filme com esse código de barras.");
        }

        Movie movie = new Movie();

        movie.setTitle(request.getTitle());
        movie.setBarcode(request.getBarcode());
        movie.setOverview(request.getOverview());
        movie.setPosterUrl(request.getPosterUrl());
        movie.setReleaseDate(request.getReleaseDate());
        movie.setTmdbId(request.getTmdbId());

        return movieRepository.save(movie);
    }

    public Movie findByBarcode(String barcode) {
        return movieRepository.findByBarcode(barcode)
                .orElse(null);
    }

    public void deleteMovie(Long id) {
        movieRepository.deleteById(id);
    }
}
