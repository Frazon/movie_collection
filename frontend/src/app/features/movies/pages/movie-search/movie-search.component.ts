import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieService } from '../../services/movie.service';
import { MovieSearchResponse } from '../../models/movie-search-response.model';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {

  private movieService = inject(MovieService);

  private snackBar = inject(MatSnackBar);

  isLoadingSearch: boolean = false;

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

    this.isLoadingSearch = true;

    this.movieService.searchMovies(this.query)
      .subscribe({
        next: (response) => {
          this.movies = response;
          this.isLoadingSearch = false;
        },
        error: (error) => {
          this.isLoadingSearch = false;
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
          this.snackBar.open(
            'Filme adicionado com sucesso!',
            'Fechar',
            {
              duration: 3000
            }
          );
          this.loadCollection();
        },
        error: (error) => {
          console.error(error);
          this.snackBar.open(
            error.error.message,
            'Fechar',
            {
              duration: 3000
            }
          );
        }
      });
  }

  isMovieInCollection(tmdbId: number): boolean {

    return this.collection.some(
      movie => movie.tmdbId === tmdbId
    );
  }

}
