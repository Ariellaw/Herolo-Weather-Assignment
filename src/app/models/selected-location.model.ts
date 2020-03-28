export class SelectedLocation {
    constructor(
        public readonly cityName:string,
        public readonly countryName:string,
        public readonly key:string,
        public readonly isInFavorites:boolean
    ){}









    // `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${searchText}`
    //TODO - find better variable name for searchText
}


