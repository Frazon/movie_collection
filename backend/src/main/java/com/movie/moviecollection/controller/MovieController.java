package com.movie.moviecollection.controller;

import com.movie.moviecollection.entity.Movie;
import com.movie.moviecollection.service.MovieService;
import org.springframework.web.bind.annotation.*;

import com.movie.moviecollection.dto.CreateMovieRequest;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getMovies() {
        return movieService.getAllMovies();
    }

    @PostMapping
    public Movie createMovie(
            @RequestBody CreateMovieRequest request
    ) {
        return movieService.createMovie(request);
    }

    @GetMapping("/barcode/{barcode}")
    public Movie getMovieBayBarcode(@PathVariable String barcode){
        return movieService.findByBarcode(barcode);
    }
}