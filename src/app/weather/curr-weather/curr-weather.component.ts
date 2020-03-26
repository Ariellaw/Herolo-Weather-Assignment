import { Component, OnInit } from '@angular/core';
import {ForecastService} from '../../services/forecast.service';


@Component({
  selector: 'app-curr-weather',
  templateUrl: './curr-weather.component.html',
  styleUrls: ['./curr-weather.component.scss']
})
export class CurrWeatherComponent implements OnInit {
  currWeather:{icon:string, weatherText:string, realFeelTemp:number, tempature: number, time: string}

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
   this.getCurrentWeather(55); 
  }

  async getCurrentWeather(locationCode){
    this.currWeather = await this.forecastService.getCurrentWeather(locationCode);
   }
}
