import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieSearchResponse } from '../models/movie-search-response.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080';

  searchMovies(query: string): Observable<MovieSearchResponse[]> {

    return this.http.get<MovieSearchResponse[]>(
      `${this.apiUrl}/tmdb/search?query=${query}`
    );
  }
}
