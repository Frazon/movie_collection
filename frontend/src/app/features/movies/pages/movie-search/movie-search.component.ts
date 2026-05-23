import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { MovieSearchResponse } from '../../models/movie-search-response.model';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {

  private movieService = inject(MovieService);

  query = '';

  movies: MovieSearchResponse[] = [];

  collection: Movie[] = [];

  constructor() {
    this.loadCollection();
  }

  loadCollection() {

    this.movieService.getMovies()
      .subscribe({
        next: (response) => {
          this.collection = response;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  searchMovies() {

    if (!this.query.trim()) {
      return;
    }

    this.movieService.searchMovies(this.query)
      .subscribe({
        next: (response) => {
          this.movies = response;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  addMovie(movie: MovieSearchResponse) {

    const request = {
      title: movie.title,
      barcode: crypto.randomUUID(),
      overview: movie.overview,
      posterUrl: movie.posterUrl,
      releaseDate: movie.releaseDate,
      tmdbId: movie.tmdbId
    };

    this.movieService.createMovie(request)
      .subscribe({
        next: () => {
          alert('Filme adicionado com sucesso!');
          this.loadCollection();
        },
        error: (error) => {
          console.error(error);
          alert(error.error.message);
        }
      });
  }

  isMovieInCollection(tmdbId: number): boolean {

    return this.collection.some(
      movie => movie.tmdbId === tmdbId
    );
  }

}
