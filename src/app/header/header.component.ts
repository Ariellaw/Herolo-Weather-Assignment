import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import * as constants from '../models/constants'
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  units: string
  darkmode: boolean

  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit (): void {
    this.darkmode = this.favoritesService.getDarkMode()
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const units = queryParams.units
      this.units =
        units === constants.units.fahrenheit
          ? constants.units.fahrenheit
          : constants.units.celsius
    })
  }
  toggleLightDarkMode ($event) {
    const isDarkMode = $event.target.checked
    this.favoritesService.toggleDarkMode(isDarkMode)
  }
  togglefahrenheitCelsius ($event) {
    const units = $event.target.checked
      ? constants.units.fahrenheit
      : constants.units.celsius

    const queryParams: Params = { units: units }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    })
  }
  togglePage (page: string) {
    this.router.navigate([page], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
    })
  }
}
