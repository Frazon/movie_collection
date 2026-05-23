package com.movie.moviecollection.dto.tmdb;

import java.util.List;

public class TmdbSearchResponse {

    private List<TmdbMovie> results;

    public List<TmdbMovie> getResults() {
        return results;
    }

    public void setResults(List<TmdbMovie> results) {
        this.results = results;
    }
}