import { DailyForecast } from './daily-forecast.model'

export class WeeklyForecast {
  // constructor (
  //   public readonly dailyForecasts: DailyForecast[]
  // ) {}

  public readonly dailyForecasts: DailyForecast[]

  constructor (dailyForecasts: DailyForecast[]) {
    this.dailyForecasts = dailyForecasts
  }
}
//`https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${apiKey}&details=true`
