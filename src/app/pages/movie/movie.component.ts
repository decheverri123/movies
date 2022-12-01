import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { MovieVideo } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie!: Movie;
  imagesSizes = IMAGES_SIZES;
  movieVideos!: MovieVideo[];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
    });
  }
  getMovieVideos(id: number) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideos) => {
      this.movieVideos = movieVideos.results;
    });
  }

  getMovie(id: number) {
    this.moviesService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
    });
  }
}
