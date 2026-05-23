import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent {

  private movieService = inject(MovieService);

  movies: Movie[] = [];

  constructor() {
    this.loadMovies();
  }

  loadMovies() {

    this.movieService.getMovies()
      .subscribe({
        next: (response) => {
          this.movies = response;
        }
      });
  }

  deleteMovie(id: number) {

    this.movieService.deleteMovie(id)
      .subscribe({
        next: () => {
          alert('Filme removido com sucesso da coleçao!');
          this.loadMovies();
        }
      });
  }
}
