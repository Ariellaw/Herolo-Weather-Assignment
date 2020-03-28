export class CurrentWeather {
  // public readonly icon: string
  // public readonly weatherText: string
  // public readonly time: string
  // public readonly realFeelMetric: number
  // public readonly realFeelImperial: number
  // public readonly realFeelShadeMetric: number
  // public readonly realFeelShadeImperial: number
  // public readonly tempMetric: number
  // public readonly tempImperial: number
  // public readonly humidity: string
  // public readonly visibilityMetric: string
  // public readonly visibilityImperial: string

  constructor (
    public readonly icon: string,
    public readonly weatherText: string,
    public readonly time: string,
    public readonly realFeelMetric: number,
    public readonly realFeelImperial: number,
    public readonly realFeelShadeMetric: number,
    public readonly realFeelShadeImperial: number,
    public readonly tempMetric: number,
    public readonly tempImperial: number,
    public readonly humidity: string,
    public readonly visibilityMetric: string,
    public readonly visibilityImperial: string
  ) {
    // this.icon = icon
    // this.weatherText = weatherText
    // this.time = time
    // this.realFeelMetric = realFeelMetric
    // this.realFeelImperial = realFeelImperial
    // this.realFeelShadeMetric = realFeelShadeMetric
    // this.realFeelShadeImperial = realFeelShadeImperial
    // this.tempMetric = tempMetric
    // this.tempImperial = tempImperial
    // this.humidity = humidity
    // this.visibilityMetric = visibilityMetric
    // this.visibilityImperial = visibilityImperial
  }
}
//`https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${apiKey}&details=true`
