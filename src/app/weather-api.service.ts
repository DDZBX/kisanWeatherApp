import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { WeatherReport } from './weather-report';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) { }

  private weatherURL = 'https://storage.googleapis.com/kisanhub-interview-question-data/metoffice/';

  getWeatherData(location: string, metric: string) : Observable<WeatherReport[]>{
  	const URL = this.weatherURL + metric + '-' + location + '.json';
  	return this.http.get<WeatherReport[]>(URL)
  		.pipe(
  				catchError(this.handleError<WeatherReport[]>('getWeatherData'))
  			);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
