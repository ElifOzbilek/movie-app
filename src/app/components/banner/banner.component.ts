import { Component, OnInit } from '@angular/core';
import { IMovieList } from '../../shared/models/movie-list.interface';
import { MovieService } from '../../services/movie.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{

 movieList: IMovieList[] = [];
constructor(private service:MovieService, private imageService:ImageService ){}

  ngOnInit(): void {

    this.service.getMovies().subscribe((result)=>{
      console.log(result);
      this.movieList = result.results;
     
    })
  }
  getImageUrl(posterPath: string) {
    return this.imageService.getImageUrl(posterPath);
  }

}
