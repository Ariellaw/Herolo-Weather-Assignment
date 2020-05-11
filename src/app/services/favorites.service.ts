import { Injectable, EventEmitter } from '@angular/core'
import { Locations } from '../models/locations.model'

enum Location {
  favorite = 'favorite'
}
@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  darkModeChanged = new EventEmitter<boolean>()
  darkmode: boolean = false

  constructor () {}

  addLocationToFavorites (location: Locations) {
    let favorites = this.getFavoritesFromLocalStorage()
    favorites.splice(0, 0, location)
    this.storeFavoritesInLocalStorage(favorites)
  }

  removeLocationFromFavorites (locationKey: string) {
    let favorites = this.getFavoritesFromLocalStorage()
    const idx = favorites.findIndex(
      favorite => locationKey === favorite.locationKey
    )

    if (idx >= 0) {
      favorites.splice(idx, 1)
    }
    this.storeFavoritesInLocalStorage(favorites)
  }

  isLocationInFavorites (locationKey: string): boolean {
    let favorites = this.getFavoritesFromLocalStorage()

    const idx = favorites.findIndex(
      favorite => locationKey === favorite.locationKey
    )
    return idx >= 0
  }

  storeFavoritesInLocalStorage (favorites) {
    const favoritesStr = JSON.stringify(favorites)
    localStorage.setItem(Location.favorite, favoritesStr)
  }

  getFavoritesFromLocalStorage (): Locations[] {
    const favoritesStr = localStorage.getItem(Location.favorite)

    if (favoritesStr) {
      return JSON.parse(favoritesStr)
    } else {
      let favorites: Locations[] = []
      return favorites
    }
  }
  toggleDarkMode (isDarkMode) {
    this.darkmode = isDarkMode
    this.darkModeChanged.emit(this.darkmode);
  }
  getDarkMode(){
    return this.darkmode;
  }
}
