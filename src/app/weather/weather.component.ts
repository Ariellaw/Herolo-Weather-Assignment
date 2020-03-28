import { Component, OnInit, Input } from '@angular/core'
import { LocationService } from '../services/location.service'
import { ForecastService } from '../services/forecast.service'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import { DailyForecast } from '../models/daily-forecast.model'
import { Locations } from '../models/locations.model'
import { CurrentWeather } from '../models/current-weather.model'
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
  displayedDayForecast: DailyForecast = null
  currentWeather: CurrentWeather = null
  currentWeatherDisplayed: boolean = true
  index: number

  constructor (
    private locationService: LocationService,
    private forecastService: ForecastService
  ) {}

  ngOnInit () {
    this.getWeeklyForecast(this.locationKey)
    this.getCurrentWeather(this.locationKey)
  }

  async onUserInput ($event) {
    var input = $event.target.value
    if (input.length >= 2) {
      try {
        this.suggestedLocations = await this.locationService.getSuggestedLocations(
          input
        )
      } catch (e) {
        alert('please try again' + e)
      }
    }
  }

  async getWeeklyForecast (locationKey: string) {
    try {
      this.weeklyForecast = await this.forecastService.getWeeklyForecast(
        locationKey
      )
    } catch (e) {
      alert('please try again' + e)
    }
  }

  async getCurrentWeather (locationKey) {
    try {
      this.currentWeather = await this.forecastService.getCurrentWeather(
        locationKey
      )

    } catch (e) {
      alert('please try again' + e)
    }
  }

  onUserSelection ($event) {
    this.currentWeatherDisplayed = true;
    const location = $event.target.value
    const option = document.querySelector(
      "#locations option[value='" + location + "']"
    )
    const locationKey = option.getAttribute('data-value');
    this.getWeeklyForecast(locationKey)
    this.getCurrentWeather(locationKey)
  }

  displayForecast (idx: number) {
    this.currentWeatherDisplayed = false
    this.displayedDayForecast = this.weeklyForecast.dailyForecasts[idx]
  }
}
