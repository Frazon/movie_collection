import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { MovieSearchResponse } from '../../models/movie-search-response.model';

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
}
