import { DailyForecast } from './daily-forecast.model'
import { TimeOfDayForecast } from './time-of-day-forecast.model'

export class WeeklyForecast {
  // constructor (
  //   public readonly dailyForecasts: DailyForecast[]
  // ) {}

  public readonly dailyForecasts: DailyForecast[]

  constructor (dailyForecasts: DailyForecast[]) {
    this.dailyForecasts = dailyForecasts
  }

  private static getDayOfWeek (date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      new Date(date)
    )
  }

  private static getShortDate (fullDate: string): string {
    const date = new Date(fullDate)
    return `${date.getDate()}/${date.getMonth() + 1}`
  }
  private static fixFormatting (value) {
    return value.toString().padStart(2, '0')
  }

  private static getWeatherIcon (iconIdx: number): string {
    const idx = iconIdx.toString().padStart(2, '0')
    return `https://developer.accuweather.com/sites/default/files/${idx}-s.png`
  }

  static fromJson (forecasts: any): WeeklyForecast {
    let weeklyForecast: WeeklyForecast = new WeeklyForecast([])

    forecasts.forEach((forecast, idx) => {
      const dayofWeek = WeeklyForecast.getDayOfWeek(forecast.Date)
      const date = WeeklyForecast.getShortDate(forecast.Date)
      const dayTimeData:TimeOfDayForecast = TimeOfDayForecast.fromJson(forecast.Day)
      const nightTimeData:TimeOfDayForecast = TimeOfDayForecast.fromJson(forecast.Night)
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
        dayTime: dayTimeData,
        nightTime: nightTimeData
      }
    })

    return weeklyForecast
  }
}
