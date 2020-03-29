import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Locations } from '../models/locations.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites:Locations[] = [];

  constructor(private favoritesService:FavoritesService) { }

  ngOnInit() {
   this.favorites = this.favoritesService.getFavoritesFromLocalStorage();
  }

}
