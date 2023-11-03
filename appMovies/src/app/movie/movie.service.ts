import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieSearchResponse } from 'src/models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private domain: string = 'https://www.omdbapi.com'
  private apikey: string = '2d47f1f0'

  constructor(private http: HttpClient) { }

  getMovieByTitle(title: string, page: number): Observable<MovieSearchResponse> {
    return this.http.get<MovieSearchResponse>(`${this.domain}?apikey=${this.apikey}&s=${title}&page=${page}`)

  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.domain}?apikey=${this.apikey}&i=${id}`);
  }
}
