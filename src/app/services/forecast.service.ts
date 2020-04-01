import { Injectable } from '@angular/core'
import { weeklyForecastMockData } from '../mock-data/weeklyForecast'
import { currentWeatherMockData } from '../mock-data/currentWeather'
import { CurrentWeather } from '../models/current-weather.model'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import { weeklyForecastMockDataFahrenheit } from '../mock-data/weeklyForecastMockDataFahrenheit'
@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiKey: string = 'u3l9YgfcjX8dHIZH8x9mFVTNiGLuWh4y'
  private useMockData: boolean = false;

  constructor (

  ) {}

  getCurrentWeather (locationKey: string): Promise<CurrentWeather> {
    let dataPromise: Promise<any>
    // let forecastService:ForecastService = new ForecastService();

    if (this.useMockData) {
      dataPromise = Promise.resolve(currentWeatherMockData)
    } else {
      dataPromise = fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}&details=true`
      ).then(resp => resp.json())
    }

    return dataPromise.then(data => {
      const currWeather = data[0]
      //as strange as it seems, the API returns an array with one element
      return CurrentWeather.fromJson(currWeather)
    })
  }

  getWeeklyForecast (
    locationKey: string,
    unitsOfMeasurment: string
  ): Promise<WeeklyForecast> {
    let dataPromise: Promise<any>
    const isMetric: string = unitsOfMeasurment === 'celsius' ? 'true' : 'false'

    if (this.useMockData) {
      if (unitsOfMeasurment === 'celsius') {
        dataPromise = Promise.resolve(weeklyForecastMockData)
      } else {
        dataPromise = Promise.resolve(weeklyForecastMockDataFahrenheit)
      }
    } else {
      dataPromise = fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}&details=true&metric=${isMetric}`
      ).then(resp => resp.json())
    }

    return dataPromise.then(data => {
      const forecasts = data.DailyForecasts
      return WeeklyForecast.fromJson(forecasts)
    })
  }
}
