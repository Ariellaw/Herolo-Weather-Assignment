import { Injectable } from '@angular/core'
import { weeklyForecastMockData } from '../mock-data/weeklyForecast'
import { currentWeatherMockData } from '../mock-data/currentWeather'
import { CurrentWeather } from '../models/current-weather.model'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import {weeklyForecastMockData2} from '../mock-data/weeklyForecast2';
@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  // apiKey = 'u3l9YgfcjX8dHIZH8x9mFVTNiGLuWh4y'
  apiKey = 'KUf6QQD5JF8HgA7B11F4jna8eky8rZSA'
  useMockData = true

  constructor () {}

  getCurrentWeather (locationKey: string): Promise<CurrentWeather> {
    // let currentWeather: CurrentWeather
    let dataPromise: Promise<any>

    if (this.useMockData) {
      dataPromise = Promise.resolve(currentWeatherMockData)
    } else {
      dataPromise = fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}&details=true`
      ).then(resp => resp.json())
    }

    return dataPromise.then(data => {
      const currWeather = data[0]

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
      if( unitsOfMeasurment === 'celsius'){
        dataPromise = Promise.resolve(weeklyForecastMockData)
      }else{
        dataPromise = Promise.resolve(weeklyForecastMockData2)
      }
      
    } else {
      dataPromise = fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}&details=true&metric=${isMetric}`
      ).then(resp => resp.json())
    }

    return dataPromise.then(data => {
      var forecasts = data.DailyForecasts

      return WeeklyForecast.fromJson(forecasts)
    })
  }

  getWeatherIcon (iconIdx: number): string {
    const idx = iconIdx.toString().padStart(2, '0')
    return `https://developer.accuweather.com/sites/default/files/${idx}-s.png`
  }

  getDayOfWeek (date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      new Date(date)
    )
  }

  getShortDate (fullDate: string): string {
    const date = new Date(fullDate)
    return `${date.getDate()}/${date.getMonth() + 1}`
  }

  getTime (fullDate: string): string {
    const date = new Date(fullDate)
    const minutes = date
      .getMinutes()
      .toString()
      .padStart(2, '0')
    return `${date.getHours()}:${minutes}`
  }

  fixFormatting (value) {
    return value.toString().padStart(2, '0')
  }
}

// https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${api}&details=false&metric=true
// https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${api}&details=true&metric=true
