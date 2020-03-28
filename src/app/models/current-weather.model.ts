export class CurrentWeather {

  constructor (
    public readonly icon: string,
    public readonly weatherText: string,
    public readonly time: string,
    public readonly link: string,
    public readonly mobileLink: string,
    public readonly realFeelMetric: number,
    public readonly realFeelImperial: number,
    public readonly realFeelShadeMetric: number,
    public readonly realFeelShadeImperial: number,
    public readonly tempMetric: number,
    public readonly tempImperial: number,
    public readonly humidity: string,
    public readonly visibilityMetric: string,
    public readonly visibilityImperial: string
  ) {  }

  private static getWeatherIcon (iconIdx: number): string {
    const idx = iconIdx.toString().padStart(2, '0')
    return `https://developer.accuweather.com/sites/default/files/${idx}-s.png`
  }

  private static getTime (fullDate: string): string {
    const date = new Date(fullDate)
    const minutes = date
      .getMinutes()
      .toString()
      .padStart(2, '0')
    return `${date.getHours()}:${minutes}`
  }

  static fromJson(currWeather: any) : CurrentWeather {
    const icon = this.getWeatherIcon(currWeather.WeatherIcon)
    const time = this.getTime(currWeather.LocalObservationDateTime)
    return {
      icon: icon,
      weatherText: currWeather.WeatherText,
      time: time,
      link: currWeather.Link,
      mobileLink: currWeather.MobileLink,
      realFeelMetric: Math.round(
        currWeather.RealFeelTemperature.Metric.Value
      ),
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
  } 
}
//`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
