package com.movie.moviecollection.repository;

import com.movie.moviecollection.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}