package com.movie.moviecollection.controller;

import com.movie.moviecollection.dto.MovieSearchResponse;
import com.movie.moviecollection.service.TmdbService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tmdb")
public class TmdbController {

    private final TmdbService tmdbService;

    public TmdbController(TmdbService tmdbService) {
        this.tmdbService = tmdbService;
    }

    @GetMapping("/search")
    public List<MovieSearchResponse> searchMovies(
            @RequestParam String query
    ) {
        return tmdbService.searchMovies(query);
    }
}