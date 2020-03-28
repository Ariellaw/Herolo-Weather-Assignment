import { Injectable } from '@angular/core'
import { selectedLocationMockData } from '../mock-data/selectedLocation'
import { Locations } from '../models/locations.model'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiKey="u3l9YgfcjX8dHIZH8x9mFVTNiGLuWh4y"
  constructor () {}

  getSuggestedLocations (keyword: string): Promise<Locations[]> {
    let suggestLocations: Locations[] = []

    // fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${keyword}`).then(resp =>resp.json())

      // Call the fetch function passing the url of the API as a parameter
      Promise.resolve(selectedLocationMockData)
      .then(data=>{

        data.forEach((location, idx) => {
          suggestLocations[idx] = {
            cityName: location.LocalizedName,
            countryName: location.Country.LocalizedName,
            key: location.Key
          }
        })
      })
      .catch(function () {
        // This is where you run code if the server returns any errors
      })

    return Promise.resolve(suggestLocations)
  }
}

//http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09${api}&q=${keyword}
