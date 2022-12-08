import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL: string = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=qdwGEKJI6NJQxanAf9VqJCVLUPsO0od9';

  constructor(private http:HttpClient) { }
  movies;
getMoviesList(): Observable<any>{
  return this.http.get<any>(this.apiURL).pipe(
    map(data => data.results)
  )
  
}
}
