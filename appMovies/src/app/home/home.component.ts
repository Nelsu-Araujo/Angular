import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Movie, MovieSearchResponse } from 'src/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
movies: Movie[] = [];
search: string = 'harry potter';
isMovieFound: boolean = false;

constructor (private movieService: MovieService) {}

ngOnInit(): void {
  this.getMovieByTitle();
}

getMovieByTitle(page: number = 1): void {
  this.movieService.getMovieByTitle(this.search, page).subscribe((movieSearchResponse: MovieSearchResponse): void => {
    this.movies=movieSearchResponse.Search

    this.isMovieFound = movieSearchResponse.Response === 'True';
  })
}
}

