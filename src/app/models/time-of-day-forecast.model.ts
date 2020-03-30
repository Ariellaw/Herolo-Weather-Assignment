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
}
