import { Injectable } from '@angular/core'
import { selectedLocationMockData } from '../mock-data/selectedLocation'
import { Locations } from '../models/locations.model'
import * as constants from '../models/constants';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

 
  constructor () {}

  getSuggestedLocations (keyword: string): Promise<Locations[]> {
    let suggestLocations: Locations[] = []
    let dataPromise: Promise<any>

    if (constants.useMockData) {
      dataPromise = Promise.resolve(selectedLocationMockData)
    } else {
      dataPromise = fetch(`https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${constants.apiKey}&q=${keyword}`).then(resp =>resp.json())

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

