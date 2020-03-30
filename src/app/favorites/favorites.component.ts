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
  errorMessageDisplayed:boolean = false;
  loading = false;

  constructor(private favoritesService:FavoritesService) { }

  ngOnInit() {
    this.getFavorites();
   //TODO does this need a try catch?
  }

  getFavorites(){
    this.favorites = this.favoritesService.getFavoritesFromLocalStorage();
  }
  
}
