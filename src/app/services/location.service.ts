import { Injectable } from '@angular/core'
import { selectedLocationMockData } from '../mock-data/selectedLocation'
import { Locations } from '../models/locations.model'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
   apiKey:string = 'u3l9YgfcjX8dHIZH8x9mFVTNiGLuWh4y'
  //  apiKey:string = 'KUf6QQD5JF8HgA7B11F4jna8eky8rZSA'
   useMockData:boolean = false;
 
  constructor () {}

  getSuggestedLocations (keyword: string): Promise<Locations[]> {
    let suggestLocations: Locations[] = []
    let dataPromise: Promise<any>

    if (this.useMockData) {
      dataPromise = Promise.resolve(selectedLocationMockData)
    } else {
      dataPromise = fetch(` https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${keyword}`).then(resp =>resp.json())

    }
      return dataPromise.then(data=>{

        data.forEach((location, idx) => {
          suggestLocations[idx] = {
            cityName: location.LocalizedName,
            countryName: location.Country.LocalizedName,
            locationKey: location.Key
          }
        })
        return suggestLocations

      })

  }
}

