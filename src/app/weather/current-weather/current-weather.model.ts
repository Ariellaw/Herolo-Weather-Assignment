export class CurrentWeather {
  public icon: string
  public weatherText: string
  public time: string
  public realFeelMetric: number
  public realFeelImperial: number
  public realFeelShadeMetric: number
  public realFeelShadeImperial: number
  public tempMetric: number
  public tempImperial: number
  public humidity: string
  public visibilityMetric: string
  public visibilityImperial: string

  constructor (
    icon: string,
    weatherText: string,
    time: string,
    realFeelMetric: number,
    realFeelImperial: number,
    realFeelShadeMetric: number,
    realFeelShadeImperial: number,
    tempMetric: number,
    tempImperial: number,
    humidity: string,
    visibilityMetric: string,
    visibilityImperial: string
  ) {
    this.icon = icon
    this.weatherText = weatherText
    this.time = time
    this.realFeelMetric = realFeelMetric
    this.realFeelImperial = realFeelImperial
    this.realFeelShadeMetric = realFeelShadeMetric
    this.realFeelShadeImperial = realFeelShadeImperial
    this.tempMetric = tempMetric
    this.tempImperial = tempImperial
    this.humidity = humidity
    this.visibilityMetric = visibilityMetric
    this.visibilityImperial = visibilityImperial
  }
}
//`https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${apiKey}&details=true`
