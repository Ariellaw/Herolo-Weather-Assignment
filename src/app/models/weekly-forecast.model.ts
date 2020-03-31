import { DailyForecast } from './daily-forecast.model'

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
          precipitationProbability: forecast.Day.PrecipitationProbability,
          thunderstormProbability: forecast.Day.ThunderstormProbability,
          rain: forecast.Day.Rain.Value,
          snow: forecast.Day.Snow.Value,
          ice: forecast.Day.Ice.Value,
          windGusts:
            forecast.Day.Wind.Speed.Value.toString() +
            forecast.Day.Wind.Speed.Unit
        },
        nightTime: {
          icon: this.getWeatherIcon(forecast.Night.Icon),
          iconPhrase: forecast.Night.IconPhrase,
          shortText: forecast.Night.ShortPhrase,
          longText: forecast.Night.LongPhrase,
          precipitationProbability: forecast.Night.PrecipitationProbability,
          thunderstormProbability: forecast.Night.ThunderstormProbability,
          rain: forecast.Night.Rain.Value,
          snow: forecast.Night.Snow.Value,
          ice: forecast.Night.Ice.Value,
          windGusts:
            forecast.Night.Wind.Speed.Value.toString() +
            forecast.Night.Wind.Speed.Unit
        }
      }
    })

    return weeklyForecast
  }
}
