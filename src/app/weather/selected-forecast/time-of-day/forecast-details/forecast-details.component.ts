import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { TimeOfDayForecast } from 'src/app/models/time-of-day-forecast.model'
import { ActivatedRoute } from '@angular/router'
import * as constants from '../../../../models/constants'
import { FavoritesService } from 'src/app/services/favorites.service'

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {
  @Input() forecast: TimeOfDayForecast
  @Output() windowClosed = new EventEmitter()
  darkmode: boolean = false

  constructor (
    private route: ActivatedRoute,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit (): void {
    this.darkmode = this.favoritesService.getDarkMode()

    this.favoritesService.darkModeChanged.subscribe((darkmode: boolean) => {
      this.darkmode = darkmode
    })
  }

  closeWindow ($event) {
    $event.preventDefault()
    this.windowClosed.emit()
  }
}
