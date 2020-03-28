import { Component, OnInit, Input } from '@angular/core'
import { LocationService } from '../services/location.service'
import { ForecastService } from '../services/forecast.service'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import { DailyForecast } from '../models/daily-forecast.model'
import { Locations } from '../models/locations.model'
import {CurrentWeather} from '../models/current-weather.model'
// import {InputEvent } from '@types/dom-inputevent';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [LocationService, ForecastService]
})
export class WeatherComponent implements OnInit {
  location: string = 'Tel Aviv, Israel'
  locationIsInFavorites: boolean = false
  locationKey: string = '215854'
  suggestedLocations: Locations[]
  weeklyForecast: WeeklyForecast = new WeeklyForecast([])
  displayedDayForecast: DailyForecast = null;
  currentWeather:CurrentWeather=null;
  index: number
  constructor (
    private locationService: LocationService,
    private forecastService: ForecastService
  ) {}

  ngOnInit () {
    this.getWeeklyForecast(this.locationKey);
    this.getCurrentWeather(this.locationKey);
  }

  async onUserInput ($event) {
    var input = $event.target.value
    if (input.length >= 3) {
      this.suggestedLocations = await this.locationService.getSuggestedLocations(
        input
      )
    }
  }

  async getWeeklyForecast (locationKey: string) {
    this.weeklyForecast = await this.forecastService.getWeeklyForecast(
      locationKey
    )
  }

  async getCurrentWeather(locationKey){
    this.currentWeather = await this.forecastService.getCurrentWeather(locationKey);
    console.log("this.currentWeather",this.currentWeather)

  }

  onUserSelection ($event) {
    // console.log("$event.target.locationKey",$event.target.value);
    const location = $event.target.value
    const option = document.querySelector(
      "#locations option[value='" + location + "']"
    )
    const locationKey = option.getAttribute('data-value')
    this.getWeeklyForecast(locationKey);
    this.getCurrentWeather(locationKey);
  }

  displayForecast (idx: number) {
    this.displayedDayForecast = this.weeklyForecast.dailyForecasts[idx]
  }
}
