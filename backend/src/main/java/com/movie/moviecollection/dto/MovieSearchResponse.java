package com.movie.moviecollection.dto;

public class MovieSearchResponse {

    private String title;
    private String overview;
    private String releaseDate;
    private String posterUrl;
    private Long tmdbId;

    public MovieSearchResponse(
            Long tmdbId,
            String title,
            String overview,
            String releaseDate,
            String posterUrl
    ) {
        this.title = title;
        this.overview = overview;
        this.releaseDate = releaseDate;
        this.posterUrl = posterUrl;
        this.tmdbId = tmdbId;
    }

    public String getTitle() {
        return title;
    }

    public String getOverview() {
        return overview;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public Long getTmdbId() {
        return tmdbId;
    }
}