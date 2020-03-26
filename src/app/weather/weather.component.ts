import { Component, OnInit } from '@angular/core';
import {LocationService} from "../services/location.service";
import {ForecastService} from "../services/forecast.service";
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers:[LocationService, ForecastService]
})
export class WeatherComponent implements OnInit {
  location:string = "Tel Aviv, Israel";
  locationKey:string = "215854";
  suggestedLocations:{ "Version": number; "Key": string; "Type": string; "Rank": number; "LocalizedName": string; "Country": { "ID": string; "LocalizedName": string; }; "AdministrativeArea": { "ID": string; "LocalizedName": string; }; }[] = [];
  weeklyForecast:any[] = [];


  constructor(private locationService:LocationService, private forecastService: ForecastService  ) { }

  ngOnInit() {
    console.log("nginit")
    this.getWeeklyForecast(this.locationKey);
  }

  async onUserInput($event){
    var input = $event.target.value;
    if(input.length>=3){
      this.suggestedLocations = await this.locationService.getLocations()
    }
  }

  async getWeeklyForecast(locationKey){
    this.weeklyForecast = await this.forecastService.getWeeklyForecast(locationKey);
  }

  onUserSelection($event){
    this.location = $event.target.value;
  }
}
