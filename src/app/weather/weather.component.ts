import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers:[WeatherService]
})
export class WeatherComponent implements OnInit {
  location:string = "Tel Aviv";
  suggestedLocations:{ "Version": number; "Key": string; "Type": string; "Rank": number; "LocalizedName": string; "Country": { "ID": string; "LocalizedName": string; }; "AdministrativeArea": { "ID": string; "LocalizedName": string; }; }[] = [];



  constructor(private weatherService:WeatherService) { }

  ngOnInit() {}

  async onUserInput($event){
    var input = $event.target.value;
    if(input.length>=3){
      this.suggestedLocations = await this.weatherService.getLocations()
    }
  }

  onUserSelection($event){
    this.location = $event.target.value;
  }
}
