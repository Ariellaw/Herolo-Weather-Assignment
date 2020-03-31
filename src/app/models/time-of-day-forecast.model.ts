export class TimeOfDayForecast {
  constructor (
    public readonly icon: string,
    public readonly iconPhrase: string,
    public readonly shortText: string,
    public readonly longText: string,
    public readonly precipitationProbability: string,
    public readonly thunderstormProbability: string,
    public readonly rain: string,
    public readonly snow: string,
    public readonly ice: string,
    public readonly windGusts: string
  ) {}

  private static getWeatherIcon (iconIdx: number): string {
    const idx = iconIdx.toString().padStart(2, '0')
    return `https://developer.accuweather.com/sites/default/files/${idx}-s.png`
  }

  static fromJson (timeOfDay: any): TimeOfDayForecast {
    let timeOfDayForecast: TimeOfDayForecast = {
      icon: TimeOfDayForecast.getWeatherIcon(timeOfDay.Icon),
      iconPhrase: timeOfDay.IconPhrase,
      shortText: timeOfDay.ShortPhrase,
      longText: timeOfDay.LongPhrase,
      precipitationProbability: timeOfDay.PrecipitationProbability,
      thunderstormProbability: timeOfDay.ThunderstormProbability,
      rain: timeOfDay.Rain.Value,
      snow: timeOfDay.Snow.Value,
      ice: timeOfDay.Ice.Value,
      windGusts:
        timeOfDay.Wind.Speed.Value.toString() + timeOfDay.Wind.Speed.Unit
    }

    return timeOfDayForecast
  }
}
