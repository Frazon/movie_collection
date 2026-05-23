package com.movie.moviecollection.service;

import com.movie.moviecollection.entity.Movie;
import com.movie.moviecollection.repository.MovieRepository;
import org.springframework.stereotype.Service;

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

    public Movie createMovie(Movie movie) {

        Movie existingMovie = movieRepository
                .findByBarcode(movie.getBarcode())
                .orElse(null);

        if(existingMovie != null){
            throw new RuntimeException("Já existe um filme com esse código de barras.");
        }

        return movieRepository.save(movie);
    }

    public Movie findByBarcode(String barcode) {
        return movieRepository.findByBarcode(barcode)
                .orElse(null);
    }
}
