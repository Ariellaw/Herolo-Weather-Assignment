import { Component, OnInit, Input } from '@angular/core'
import { LocationService } from '../services/location.service'
import { ForecastService } from '../services/forecast.service'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import { DailyForecast } from '../models/daily-forecast.model'
import {Locations} from '../models/locations.model';
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
  suggestedLocations:Locations[];
  weeklyForecast: WeeklyForecast = new WeeklyForecast([])
  displayedDayForecast: DailyForecast = null

  constructor (
    private locationService: LocationService,
    private forecastService: ForecastService
  ) {}

  ngOnInit () {
    this.getWeeklyForecast(this.locationKey);
  }

  async onUserInput ($event) {
    var input = $event.target.value
    if (input.length >= 3) {
      this.suggestedLocations = await this.locationService.getSuggestedLocations(input);
    }
  }

  async getWeeklyForecast (locationKey: string) {
    this.weeklyForecast = await this.forecastService.getWeeklyForecast(
      locationKey
    )
    console.log(this.weeklyForecast)
    this.displayedDayForecast = this.weeklyForecast.dailyForecasts[1];
  }

  onUserSelection ($event) {
    this.location = $event.target.value

    //TODO find out what event this is
  }

  displayForecast (idx: number) {
    this.displayedDayForecast = this.weeklyForecast.dailyForecasts[idx];
  }
}
