import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDto, MovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'f752c90940bcccc47a73c77f310529f7';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular', count: number = 10) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMovie(id: number) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMovieVideos(id: number) {
    return this.http.get<MovieVideoDto>(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
    );
  }
}
