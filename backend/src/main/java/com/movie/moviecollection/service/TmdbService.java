package com.movie.moviecollection.service;

import com.movie.moviecollection.dto.MovieSearchResponse;
import com.movie.moviecollection.dto.tmdb.TmdbMovie;
import com.movie.moviecollection.dto.tmdb.TmdbSearchResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class TmdbService {

    private final RestClient restClient;

    @Value("${tmdb.api.key}")
    private String apiKey;

    public TmdbService(RestClient restClient) {
        this.restClient = restClient;
    }

    public List<MovieSearchResponse> searchMovies(String query) {

        TmdbSearchResponse response = restClient.get()
                .uri(
                        "https://api.themoviedb.org/3/search/movie?api_key={apiKey}&query={query}",
                        apiKey,
                        query
                )
                .retrieve()
                .body(TmdbSearchResponse.class);

        return response.getResults()
                .stream()
                .map(this::mapToMovieResponse)
                .toList();
    }

    private MovieSearchResponse mapToMovieResponse(TmdbMovie movie) {

        String posterUrl = movie.getPoster_path() != null
                ? "https://image.tmdb.org/t/p/w500" + movie.getPoster_path()
                : null;

        return new MovieSearchResponse(
                movie.getId(),
                movie.getTitle(),
                movie.getOverview(),
                movie.getRelease_date(),
                posterUrl
        );
    }
}