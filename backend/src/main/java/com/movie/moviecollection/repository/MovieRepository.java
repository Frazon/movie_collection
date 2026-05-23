package com.movie.moviecollection.repository;

import com.movie.moviecollection.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    Optional<Movie> findByBarcode(String barcode);

}