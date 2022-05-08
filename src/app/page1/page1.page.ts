import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  public res;
  lat = 53.3498;
  lon = -6.2603;
  constructor(
    public weatherAPI: WeatherService
  ) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(){
    this.weatherAPI.getWeatherData(this.lat, this.lon).subscribe((response) => {
      this.res = response;
      console.log(this.res);
    });
  }
}

