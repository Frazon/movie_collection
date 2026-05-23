import { Component } from '@angular/core';
import { MovieSearchComponent } from './features/movies/pages/movie-search/movie-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieSearchComponent],
  template: '<app-movie-search />'
})
export class AppComponent {}
