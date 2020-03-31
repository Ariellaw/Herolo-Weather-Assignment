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
  errorMessage: boolean = false
  loading: boolean = true
  displayMessage: boolean = false

  constructor (private favoritesService: FavoritesService) {}

  ngOnInit () {
    this.getFavorites()
  }

  getFavorites () {
    this.favorites = this.favoritesService.getFavoritesFromLocalStorage()

    if (this.favorites) {
      this.loading = false
      if (this.favorites.length === 0) {
        this.displayMessage = true
      }
    }
  }
}
