/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
              public http: HttpClient,
  ) { }

  getWeatherData(lat: number, lon: number): Observable<any>{
    //const lat = 53.3498;
    //const lon = -6.2603;
    const apiId = '5406fc0daa5296e78641b793c5a08329';
    const queryString = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alert&appid=${apiId}`;

    return this.http.get(queryString);
  }

}
