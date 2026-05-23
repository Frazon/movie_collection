import { Routes } from '@angular/router';
import { MovieSearchComponent } from './features/movies/pages/movie-search/movie-search.component';
import { MovieCollectionComponent } from './features/movies/pages/movie-collection/movie-collection.component';

export const routes: Routes = [
  {
    path: '',
    component: MovieSearchComponent
  },
  {
    path: 'collection',
    component: MovieCollectionComponent
  }
];
