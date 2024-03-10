import { Component, OnInit } from '@angular/core';
import { IMovieList } from '../../shared/models/movie-list.interface';
import { MovieService } from '../../services/movie.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit{
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
  searchText: string = '';

  filterMovies() {
    const searchValue = this.searchText.toLowerCase().trim();
    this.movieList = this.movieList.filter(movie =>
      movie.title.toLowerCase().includes(searchValue)
    );
  }
  

}
