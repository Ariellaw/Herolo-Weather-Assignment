
import { Component, OnInit } from '@angular/core';
import {ForecastService} from '../../services/forecast.service';
import {CurrentWeather} from './current-weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  currWeather:CurrentWeather;

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
   this.getCurrentWeather(55); 
  }

  async getCurrentWeather(locationCode){
    this.currWeather = await this.forecastService.getCurrentWeather(locationCode);
   }
}