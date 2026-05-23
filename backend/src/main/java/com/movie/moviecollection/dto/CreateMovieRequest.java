package com.movie.moviecollection.dto;

public class CreateMovieRequest {

    private String title;
    private String barcode;
    private String overview;
    private String posterUrl;
    private String releaseDate;
    private Long tmdbId;

    public String getTitle() {
        return title;
    }

    public String getBarcode() {
        return barcode;
    }

    public String getOverview() {
        return overview;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public Long getTmdbId() {
        return tmdbId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setTmdbId(Long tmdbId) {
        this.tmdbId = tmdbId;
    }
}