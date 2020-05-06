import { Injectable } from '@angular/core'
import { weeklyForecastMockData } from '../mock-data/weeklyForecast'
import { currentWeatherMockData } from '../mock-data/currentWeather'
import { CurrentWeather } from '../models/current-weather.model'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import { weeklyForecastMockDataFahrenheit } from '../mock-data/weeklyForecastMockDataFahrenheit'
import * as constants from '../models/constants'
@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor () {}

  delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  getCurrentWeather (locationKey: string): Promise<CurrentWeather> {
    let dataPromise: Promise<any>
    if (constants.useMockData) {
      const delay = Math.max(100, constants.mockDataDelay + Math.floor(Math.random() * 1000) - 500)
      const idx =  Math.floor(Math.random() * currentWeatherMockData.length)

      dataPromise = this.delay(delay).then(() => currentWeatherMockData[idx])
    } else {
      dataPromise = fetch(
        ` https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${constants.apiKey}&details=true`
      ).then(resp => resp.json())
    }

    return dataPromise.then(data => {
      const currWeather = data
      //as strange as it seems, the API returns an array with one element
      return CurrentWeather.fromJson(currWeather)
    })
  }

  getWeeklyForecast (
    locationKey: string,
    unitsOfMeasurment: string
  ): Promise<WeeklyForecast> {
    let dataPromise: Promise<any>
    const isMetric: string = unitsOfMeasurment === 'celsius' ? 'true' : 'false';
    const idx =  Math.floor(Math.random() * weeklyForecastMockDataFahrenheit.length);
    console.log("hihi",idx)



    if (constants.useMockData) {
      if (unitsOfMeasurment === 'celsius') {
        dataPromise = Promise.resolve(weeklyForecastMockData[idx])
      } else {
        dataPromise = Promise.resolve(weeklyForecastMockDataFahrenheit[idx])
      }
    } else {
      dataPromise = fetch(
        ` https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${constants.apiKey}&details=true&metric=${isMetric}`
      ).then(resp => resp.json())
    }

    return dataPromise.then(data => {
      const forecasts = data.DailyForecasts
      return WeeklyForecast.fromJson(forecasts)
    })
  }
}
