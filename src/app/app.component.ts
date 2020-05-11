import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import * as constants from '../app/models/constants'
import { FavoritesService } from './services/favorites.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService
  ) {}
  title = 'herolo-weather-assignment'

  ngOnInit () {
    const element = document.body
    this.favoritesService.darkModeChanged.subscribe((darkmode: boolean) => {
      if (darkmode) {
        element.classList.add(constants.theme.darkmode)
        element.classList.remove(constants.theme.lightmode)
      } else {
        element.classList.add(constants.theme.lightmode)
        element.classList.remove(constants.theme.darkmode)
      }
    })
  }
}
