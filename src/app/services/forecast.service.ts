import { Injectable } from '@angular/core'
import { weeklyForecastMockData } from '../mock-data/weeklyForecast'
import { currentWeatherMockData } from '../mock-data/currentWeather'
import { CurrentWeather } from '../models/current-weather.model'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import { DailyWeather } from '../models/daily-weather.model'

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor () {}

  getCurrentWeather (locationCode) {
    var currentWeather: CurrentWeather

    const currWeather = currentWeatherMockData[0]
    const icon = this.getWeatherIcon(currWeather.WeatherIcon)
    const time = this.getTime(currWeather.LocalObservationDateTime)
    currentWeather = {
      icon: icon,
      weatherText: currWeather.WeatherText,
      time: time,
      realFeelMetric: Math.round(currWeather.RealFeelTemperature.Metric.Value),
      realFeelImperial: Math.round(
        currWeather.RealFeelTemperature.Imperial.Value
      ),
      realFeelShadeMetric: Math.round(
        currWeather.RealFeelTemperatureShade.Metric.Value
      ),
      realFeelShadeImperial: Math.round(
        currWeather.RealFeelTemperatureShade.Imperial.Value
      ),
      tempMetric: Math.round(currWeather.Temperature.Metric.Value),
      tempImperial: Math.round(currWeather.Temperature.Imperial.Value),
      humidity: currWeather.RelativeHumidity.toString() + '%',
      visibilityMetric:
        currWeather.Visibility.Metric.Value.toString() +
        currWeather.Visibility.Metric.Unit,
      visibilityImperial:
        currWeather.Visibility.Imperial.Value.toString() +
        currWeather.Visibility.Imperial.Unit
    }

    return Promise.resolve(currentWeather)
  }
  getWeeklyForecast (locationKey: string): Promise<WeeklyForecast> {
    let simplifiedWeeklyForecast: WeeklyForecast = new WeeklyForecast([])

    weeklyForecastMockData.DailyForecasts.forEach((forecast, index: number) => {
      const dayofWeek = this.getDayOfWeek(forecast.Date)
      const date = this.getShortDate(forecast.Date)

      simplifiedWeeklyForecast.dailyForecasts[index] = {
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
        dayTime: {
          icon: this.getWeatherIcon(forecast.Day.Icon),
          iconPhrase: forecast.Day.IconPhrase,
          shortText: forecast.Day.ShortPhrase,
          longText: forecast.Day.LongPhrase,
          PrecipitationProbability: forecast.Day.PrecipitationProbability,
          ThunderstormProbability: forecast.Day.ThunderstormProbability,
          RainProbability: forecast.Day.RainProbability,
          SnowProbability: forecast.Day.SnowProbability,
          IceProbability: forecast.Day.IceProbability,
          windGusts:
            forecast.Day.Wind.Speed.Value.toString() +
            forecast.Day.Wind.Speed.Unit
        },
        nightTime: {
          icon: this.getWeatherIcon(forecast.Night.Icon),
          iconPhrase: forecast.Night.IconPhrase,
          shortText: forecast.Night.ShortPhrase,
          longText: forecast.Night.LongPhrase,
          PrecipitationProbability: forecast.Night.PrecipitationProbability,
          ThunderstormProbability: forecast.Night.ThunderstormProbability,
          RainProbability: forecast.Night.RainProbability,
          SnowProbability: forecast.Night.SnowProbability,
          IceProbability: forecast.Night.IceProbability,
          windGusts:
            forecast.Night.Wind.Speed.Value.toString() +
            forecast.Night.Wind.Speed.Unit
        }
      }
    })
    return Promise.resolve(simplifiedWeeklyForecast)
  }

  getWeatherIcon (iconIdx) {
    const idx = iconIdx.toString().padStart(2, '0')
    return `https://developer.accuweather.com/sites/default/files/${idx}-s.png`
  }

  getDayOfWeek (date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      new Date(date)
    )
  }

  getShortDate (fullDate) {
    var date = new Date(fullDate)
    return `${date.getDate()}/${date.getMonth() + 1}`
  }

  getTime (fullDate) {
    var date = new Date(fullDate)
    const minutes = date
      .getMinutes()
      .toString()
      .padStart(2, '0')
    return `${date.getHours()}:${minutes}`
  }
}

// https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${api}&details=false&metric=true
// https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${api}&details=true&metric=true
