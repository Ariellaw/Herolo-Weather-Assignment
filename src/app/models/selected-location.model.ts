export class SelectedLocation {
  constructor (
    public readonly cityName: string,
    public readonly countryName: string,
    public readonly key: string,
    public readonly isInFavorites: boolean
  ) {}
}
