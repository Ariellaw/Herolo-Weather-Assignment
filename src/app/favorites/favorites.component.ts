import { Component, OnInit } from '@angular/core'
import { FavoritesService } from '../services/favorites.service'
import { Locations } from '../models/locations.model'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: Locations[] = null
  errorMessage: string = null
  isLoadingFavorites: boolean = false
  isLoadingWeather: boolean = false
  displayMessage: boolean = false

  constructor (private favoritesService: FavoritesService) {}

  ngOnInit () {
    this.getFavorites()
  }

  errorOccurred ($event) {
    this.errorMessage = $event.errorMessage
    this.isLoadingWeather = false
  }

  getFavorites () {
    this.favorites = this.favoritesService.getFavoritesFromLocalStorage()
    if (this.favorites) {
      this.isLoadingFavorites = false
      if (this.favorites.length === 0) {
        this.isLoadingWeather=false;
        this.displayMessage = true
      }
    }
  }
}
