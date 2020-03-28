import { Injectable } from '@angular/core'
import { weeklyForecastMockData } from '../mock-data/weeklyForecast'
import { currentWeatherMockData } from '../mock-data/currentWeather'
import { CurrentWeather } from '../models/current-weather.model'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import { DailyForecast } from '../models/daily-forecast.model'

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  // apiKey = 'u3l9YgfcjX8dHIZH8x9mFVTNiGLuWh4y'
  apiKey = 'KUf6QQD5JF8HgA7B11F4jna8eky8rZSA'
  useMockData = true;

  constructor () {}

  getCurrentWeather (locationKey: string): Promise<CurrentWeather> {
    let currentWeather: CurrentWeather
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
                
      return CurrentWeather.fromJson(currWeather);
    })
  }

  getWeeklyForecast (locationKey: string): Promise<WeeklyForecast> {
    let dataPromise: Promise<any>
    if (this.useMockData) {
      dataPromise = Promise.resolve(weeklyForecastMockData)
    } else {
      dataPromise = fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}&details=true&metric=true`
      ).then(resp => resp.json())
    }
    return dataPromise.then(data => {
      let weeklyForecast: WeeklyForecast = new WeeklyForecast([])
      data.DailyForecasts.forEach((forecast, idx) => {
        //TODO: Extract conversion to function
        const dayofWeek = this.getDayOfWeek(forecast.Date)
        const date = this.getShortDate(forecast.Date)

        weeklyForecast.dailyForecasts[idx] = {
          dayofWeek: dayofWeek,
          date: date,
          tempMax: Math.round(forecast.Temperature.Maximum.Value),
          tempMin: Math.round(forecast.Temperature.Minimum.Value),
          realFeelMax: Math.round(forecast.RealFeelTemperature.Maximum.Value),
          realFeelMin: Math.round(forecast.RealFeelTemperature.Minimum.Value),
          realFeelShadeMax: Math.round(
            forecast.RealFeelTemperatureShade.Maximum.Value
          ),
          realFeelShadeMin: Math.round(
            forecast.RealFeelTemperatureShade.Minimum.Value
          ),
          mobileLink: forecast.MobileLink,
          link: forecast.Link,
          dayTime: {
            icon: this.getWeatherIcon(forecast.Day.Icon),
            iconPhrase: forecast.Day.IconPhrase,
            shortText: forecast.Day.ShortPhrase,
            longText: forecast.Day.LongPhrase,
            precipitationProbability: this.fixFormatting(
              forecast.Day.PrecipitationProbability
            ),
            thunderstormProbability: this.fixFormatting(
              forecast.Day.ThunderstormProbability
            ),
            rainProbability: this.fixFormatting(forecast.Day.RainProbability),
            snowProbability: this.fixFormatting(forecast.Day.SnowProbability),
            iceProbability: this.fixFormatting(forecast.Day.IceProbability),
            windGusts:
              forecast.Day.Wind.Speed.Value.toString() +
              forecast.Day.Wind.Speed.Unit
          },
          nightTime: {
            icon: this.getWeatherIcon(forecast.Night.Icon),
            iconPhrase: forecast.Night.IconPhrase,
            shortText: forecast.Night.ShortPhrase,
            longText: forecast.Night.LongPhrase,
            precipitationProbability: this.fixFormatting(
              forecast.Night.PrecipitationProbability
            ),
            thunderstormProbability: this.fixFormatting(
              forecast.Night.ThunderstormProbability
            ),
            rainProbability: this.fixFormatting(forecast.Night.RainProbability),
            snowProbability: this.fixFormatting(forecast.Night.SnowProbability),
            iceProbability: this.fixFormatting(forecast.Night.IceProbability),
            windGusts:
              forecast.Night.Wind.Speed.Value.toString() +
              forecast.Night.Wind.Speed.Unit
          }
        }
      })
      return weeklyForecast
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
