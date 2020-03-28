import { TimeOfDayForecast } from './time-of-day-forecast.model'

export class DailyForecast {
  constructor (
    public readonly dayofWeek: string,
    public readonly date: string,
    public readonly tempMax: number,
    public readonly tempMin: number,
    public readonly realFeelMax: number,
    public readonly realFeelMin: number,
    public readonly realFeelShadeMax: number,
    public readonly realFeelShadeMin: number,
    public readonly mobileLink: string,
    public readonly link: string,
    public readonly dayTime: TimeOfDayForecast,
    public readonly nightTime: TimeOfDayForecast
  ) {}
}
//`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
