import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieSearchResponse } from '../models/movie-search-response.model';
import { CreateMovieRequest } from '../models/create-movie-request.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);

  private apiUrl = 'http://192.168.15.13:8080';

  searchMovies(query: string): Observable<MovieSearchResponse[]> {

    return this.http.get<MovieSearchResponse[]>(
      `${this.apiUrl}/tmdb/search?query=${query}`
    );
  }

  createMovie(request: CreateMovieRequest): Observable<any> {

    return this.http.post(`${this.apiUrl}/movies`, request);

  }

  getMovies(): Observable<Movie[]> {

    return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  }

  deleteMovie(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/movies/${id}`
    );
  }

  existsMovie(barcode: string): Observable<boolean>{

    return this.http.get<boolean>(
      `${this.apiUrl}/movies/exists?barcode=${barcode}`
    );
  }

}
