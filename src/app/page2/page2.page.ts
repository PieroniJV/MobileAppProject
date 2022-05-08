import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  public res;
  lat = 40.7036566;
  lon = -74.1390306;
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
