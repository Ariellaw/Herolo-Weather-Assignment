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
  constructor () {}

  getCurrentWeather (locationCode: string): Promise<CurrentWeather> {
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
        Math.round(currWeather.Visibility.Metric.Value).toString() +
        currWeather.Visibility.Metric.Unit,

      visibilityImperial:
        Math.round(currWeather.Visibility.Imperial.Value).toString() +
        currWeather.Visibility.Imperial.Unit
    }

    return Promise.resolve(currentWeather)
  }
  getWeeklyForecast (locationKey: string): Promise<WeeklyForecast> {
    let weeklyForecast: WeeklyForecast = new WeeklyForecast([])

    weeklyForecastMockData.DailyForecasts.forEach((forecast, index: number) => {
      const dayofWeek = this.getDayOfWeek(forecast.Date)
      const date = this.getShortDate(forecast.Date)

      weeklyForecast.dailyForecasts[index] = {
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
          precipitationProbability:this.fixFormatting(forecast.Day.PrecipitationProbability), 
          thunderstormProbability: this.fixFormatting(forecast.Day.ThunderstormProbability),
          rainProbability: this.fixFormatting(forecast.Day.RainProbability),
          snowProbability:this.fixFormatting(forecast.Day.SnowProbability),
          iceProbability:this.fixFormatting(forecast.Day.IceProbability),
          windGusts:
            forecast.Day.Wind.Speed.Value.toString() +
            forecast.Day.Wind.Speed.Unit
        },
        nightTime: {
          icon: this.getWeatherIcon(forecast.Night.Icon),
          iconPhrase: forecast.Night.IconPhrase,
          shortText: forecast.Night.ShortPhrase,
          longText: forecast.Night.LongPhrase,
          precipitationProbability:this.fixFormatting(forecast.Night.PrecipitationProbability), 
          thunderstormProbability: this.fixFormatting(forecast.Night.ThunderstormProbability),
          rainProbability: this.fixFormatting(forecast.Night.RainProbability),
          snowProbability:this.fixFormatting(forecast.Night.SnowProbability),
          iceProbability:this.fixFormatting(forecast.Night.IceProbability),
          windGusts:
            forecast.Night.Wind.Speed.Value.toString() +
            forecast.Night.Wind.Speed.Unit
        }
      }
    })
    return Promise.resolve(weeklyForecast)
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
    var date = new Date(fullDate)
    return `${date.getDate()}/${date.getMonth() + 1}`
  }

  getTime (fullDate: string): string {
    var date = new Date(fullDate)
    const minutes = date
      .getMinutes()
      .toString()
      .padStart(2, '0')
    return `${date.getHours()}:${minutes}`
  }

  fixFormatting(value){
    return value.toString().padStart(2, '0');
  }
}

// https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${api}&details=false&metric=true
// https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${api}&details=true&metric=true
