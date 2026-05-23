package com.movie.moviecollection.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String barcode;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getBarcode() {
        return barcode;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }
}