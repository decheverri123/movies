import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRated: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((response: any) => {
      this.popularMovies = response.results;
      console.log(this.popularMovies);
    });

    this.moviesService.getMovies('top_rated').subscribe((response: any) => {
      this.upcomingMovies = response.results;
      console.log(this.upcomingMovies);
    });

    this.moviesService.getMovies('upcoming').subscribe((response: any) => {
      this.topRated = response.results;
      console.log(this.topRated);
    });
  }
}
