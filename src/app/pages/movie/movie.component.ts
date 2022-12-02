import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieImages } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { MovieVideo, MovieCredits } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie!: Movie;
  imagesSizes = IMAGES_SIZES;
  movieVideos!: MovieVideo[];
  movieImages!: MovieImages;
  movieCredits!: MovieCredits;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
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

  getMovieImages(id: number) {
    this.moviesService.getMovieImages(id).subscribe((movieImages) => {
      this.movieImages = movieImages;
    });
  }

  getMovieCredits(id: number) {
    this.moviesService.getMovieCredits(id).subscribe((movieCredits) => {
      this.movieCredits = movieCredits;
    });
  }
}
