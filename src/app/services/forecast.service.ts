import { Injectable } from '@angular/core'
import {weeklyForecast} from '../mock-data/Tel-Aviv-weekly-forecast';
import {currentWeather} from '../mock-data/currentWeather';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {



 



  constructor () {}

  getCurrentWeather (locationCode) {
    let dailyWeather: {
      icon: string
      weatherText: string
      realFeelTemp: number
      tempature: number
      time: string
    };
    const currWeather = currentWeather[0]
    const icon = this.getWeatherIcon(currWeather.WeatherIcon)
    const time = this.getTime(currWeather.LocalObservationDateTime)
    dailyWeather = {
      icon: icon,
      weatherText: currWeather.WeatherText,
      realFeelTemp:Math.round(currWeather.RealFeelTemperature.Metric.Value) ,
      tempature: Math.round(currWeather.Temperature.Metric.Value),
      time: time
    }
    //`https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${apiKey}&details=true`
    return Promise.resolve(dailyWeather)
  }
  getWeeklyForecast (locationKey) {
   let simplifiedWeeklyForecast: {
      minTemp: number
      maxTemp: number
      icon: string
      weatherText: string
      day: string
      date: string
    }[] = []

    weeklyForecast.forEach((forecast, index: number) => {
      var icon = this.getWeatherIcon(forecast.Day.Icon)
      var day = this.getDayOfWeek(forecast.Date)
      var date = this.getShortDate(forecast.Date)

      simplifiedWeeklyForecast[index] = {
        minTemp: forecast.Temperature.Minimum.Value,
        maxTemp: forecast.Temperature.Maximum.Value,
        icon: icon,
        weatherText: forecast.Day.ShortPhrase,
        day: day,
        date: date
      }
    })
    return Promise.resolve(simplifiedWeeklyForecast.slice())
  }

  getWeatherIcon (iconIdx) {
    const idx = iconIdx.toString().padStart(2, '0');
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
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${date.getHours()}:${minutes}`;
  }
}

// https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${api}&details=false&metric=true
// https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${api}&details=true&metric=true
