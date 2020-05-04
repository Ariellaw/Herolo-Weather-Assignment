import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Locations } from '../../models/locations.model'
import { ForecastService } from '../../services/forecast.service'
import { CurrentWeather } from 'src/app/models/current-weather.model'
import { Router, ActivatedRoute } from '@angular/router'
import * as constants from '../../models/constants'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  providers: [ForecastService]
})
export class FavoriteComponent implements OnInit {
  @Output() errorOccurred = new EventEmitter<{ errorMessage: string }>()
  @Input() favorite: Locations
  @Input() units:string
  currentWeather: CurrentWeather
  darkmode: boolean = false
  isLoadingWeather:boolean=false

  constructor (
    private forecastService: ForecastService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit (): void {
    this.getCurrentWeather(this.favorite.locationKey)
    
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const mode = queryParams.mode
      this.darkmode = mode === constants.theme.darkmode ? true : false
    })
  }

  getCurrentWeather (locationKey: string) {
    this.isLoadingWeather=true

    this.forecastService
      .getCurrentWeather(locationKey)
      .then(currentWeather => {
        this.currentWeather = currentWeather
        this.isLoadingWeather = false;
      })
      .catch(error => {
        console.log("getCurrentWeather", error)
        this.errorOccurred.emit({ errorMessage: error })
        this.isLoadingWeather = false;
      })
  }

  seeFullForecast () {
    this.router.navigate(
      [
        `/${this.favorite.cityName} , ${this.favorite.countryName}/${this.favorite.locationKey}`
      ],
      {
        relativeTo: this.activatedRoute,
        queryParamsHandling: 'merge'
      }
    )
  }
}
