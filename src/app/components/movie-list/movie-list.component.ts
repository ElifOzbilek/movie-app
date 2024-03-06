import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ImageService } from '../../services/image.service';
import { IMovieList } from '../../shared/models/movie-list.interface';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  
  constructor(private service:MovieService, private imageService: ImageService){}
  
  nowPlaying: IMovieList[] = [];
  upComing : IMovieList[] = [];
  topRated: IMovieList[] = [];
  popular : IMovieList[] = []
  ngOnInit(): void {
    this.service.getNowPlaying().subscribe((result)=>{
      console.log(result);
      this.nowPlaying = result.results
    })
    this.service.getUpComing().subscribe((result)=>{
      console.log(result);
      this.upComing = result.results
    })
    this.service.getTopRated().subscribe((result)=>{
      console.log(result);
      this.topRated = result.results
    })
    this.service.getPopular().subscribe((result)=>{
      console.log(result);
      this.popular = result.results
    })
  }
  getImageUrl(posterPath: string) {
    return this.imageService.getImageUrl(posterPath);
  }

  }


