import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-movie-collection',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent {

  private movieService = inject(MovieService);

  private snackBar = inject(MatSnackBar);

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
          this.snackBar.open(
            'Filme removido com sucesso da coleçao!',
            'Fechar',
            {
              duration: 3000
            }
          );
          this.loadMovies();
        }
      });
  }
}
