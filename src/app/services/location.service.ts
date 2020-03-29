import { Injectable } from '@angular/core'
import { selectedLocationMockData } from '../mock-data/selectedLocation'
import { Locations } from '../models/locations.model'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
   // apiKey = 'u3l9YgfcjX8dHIZH8x9mFVTNiGLuWh4y'
   apiKey = 'KUf6QQD5JF8HgA7B11F4jna8eky8rZSA'
   useMockData = true;
 
  constructor () {}

  getSuggestedLocations (keyword: string): Promise<Locations[]> {
    let suggestLocations: Locations[] = []
    let dataPromise: Promise<any>

    if (this.useMockData) {
      dataPromise = Promise.resolve(selectedLocationMockData)
    } else {
      dataPromise = fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${keyword}`).then(resp =>resp.json())

    }
      // Call the fetch function passing the url of the API as a parameter
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

//http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09${api}&q=${keyword}
