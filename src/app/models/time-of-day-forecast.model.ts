export class TimeOfDayForecast {
  constructor (
    public readonly icon: string,
    public readonly iconPhrase: string,
    public readonly shortText: string,
    public readonly longText: string,
    public readonly precipitationProbability: string,
    public readonly thunderstormProbability: string,
    public readonly rainProbability: string,
    public readonly snowProbability: string,
    public readonly iceProbability: string,
    public readonly windGusts: string
  ) {}
}
