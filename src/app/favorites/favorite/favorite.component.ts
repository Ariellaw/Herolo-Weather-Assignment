import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Locations } from '../../models/locations.model'
import { ForecastService } from '../../services/forecast.service'
import { CurrentWeather } from 'src/app/models/current-weather.model'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  providers: [ForecastService]
})
export class FavoriteComponent implements OnInit {
  @Output() errorMessageOpened = new EventEmitter<void>()
  @Input() favorite: Locations
  currentWeather: CurrentWeather
  darkmode:boolean = false;

  constructor (
    private forecastServices: ForecastService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit (): void {
    this.getCurrentWeather(this.favorite.locationKey)

    this.activatedRoute.queryParams.subscribe(queryParams => {
      const mode = queryParams.mode
      this.darkmode = mode === 'dark-mode'? true:false; 
    })
  }

  async getCurrentWeather (locationKey: string) {
    try {
      this.currentWeather = await this.forecastServices.getCurrentWeather(
        locationKey
      )
    } catch (e) {
      this.errorMessageOpened.emit()
    }
  }
  seeFullForecast(){
  
    this.router.navigate(
      [`/${this.favorite.cityName} , ${this.favorite.countryName}/${this.favorite.locationKey}`], 
      {
        relativeTo: this.activatedRoute,
        // queryParams: queryParams, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

}
