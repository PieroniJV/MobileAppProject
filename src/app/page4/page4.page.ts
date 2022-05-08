import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  public res;
  lat = 39.9390731;
  lon = 116.1172591;
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
