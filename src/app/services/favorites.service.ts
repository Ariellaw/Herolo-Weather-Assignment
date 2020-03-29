import { Injectable } from '@angular/core'
import { Locations } from '../models/locations.model'

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: Locations[] = [
    {
      cityName: 'New Taipei cityName',
      countryName: 'Taiwan',
      locationKey: '2515397'
    },
    {
      cityName: 'New Delhi',
      countryName: 'India',
      locationKey: '187745'
    },

    {
      cityName: 'Newcastle upon Tyne',
      countryName: 'United Kingdom',
      locationKey: '329683'
    },

    {
      cityName: 'Newport',
      countryName: 'United Kingdom',
      locationKey: '2530492'
    }
  ]

  //TODO save to cach

  constructor () {}

  addLocationToFavorites (location: Locations) {
    this.favorites.splice(0, 0, location)
  }

  removeLocationFromFavorites (locationKey: string) {
    var idx = this.favorites.findIndex(favorite => {
      locationKey === favorite.locationKey
    })
    if (idx >= 0) {
      this.favorites.splice(idx, 1)
    }
  }
  isLocationInFavorites(locationKey:string):boolean{
    var idx = this.favorites.findIndex(favorite => {
     return locationKey === favorite.locationKey
    })
    return idx>=0;

  }
}
