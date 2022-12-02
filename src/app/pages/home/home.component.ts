import { Component, OnInit } from '@angular/core';
import { Movie, MovieDto } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular', 20).subscribe((movies) => {
      this.popularMovies = movies;
    });

    this.moviesService.getMovies('top_rated', 15).subscribe((movies) => {
      this.topRatedMovies = movies;
    });

    this.moviesService.getMovies('upcoming', 20).subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }
}
