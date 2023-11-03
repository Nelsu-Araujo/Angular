import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/movie/movie.service';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{
  id: string = '';
  movie?: Movie
  
constructor(private route: ActivatedRoute, private movieService: MovieService){}

ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id') || '';
  this.getMovieById()
}

getMovieById(): void {
  console.log('id:'+ this.id)
  console.log('getMovieById')
  this.movieService.getMovieById(this.id).subscribe((movie: Movie): void => {
    this.movie=movie
    console.log(this.movie)
  })
  }
}

