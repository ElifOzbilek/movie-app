import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovieList } from '../shared/models/movie-list.interface';

const options ={
  params:{
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2JhMTM5NDk3OTlmNzVlMjQ2NDc2OGQyYmU5YmU5YiIsInN1YiI6IjY1ZDljZjMxNGU0ZGZmMDE3Y2I4NGFmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vWKg7GT3rE8m1skEOvHcLhL2nCgfvbaijmDByld4KjU'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {


movieList: IMovieList | undefined;

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get<IMovieList>('https://api.themoviedb.org/3/discover/movie', options);
   
  }
}
