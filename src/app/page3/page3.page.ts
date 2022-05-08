import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  public res;
  lat = -37.9701539;
  lon = 144.4926507;
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
