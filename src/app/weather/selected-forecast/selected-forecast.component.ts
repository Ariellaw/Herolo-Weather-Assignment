import { Component, OnInit } from '@angular/core';
import {ForecastService} from '../../services/forecast.service';

@Component({
  selector: 'app-selected-weather',
  templateUrl: './selected-forecast.component.html',
  styleUrls: ['./selected-forecast.component.scss']
})
export class SelectedWeatherComponent implements OnInit {
  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    // this.getCurrentWeather(55);
  }
  

 async getCurrentWeather(locationCode){
  // this.currWeather = await this.forecastService.getCurrentWeather(locationCode);
 }
}
