import { Component, OnInit, Input } from '@angular/core'
import { Locations } from '../../models/locations.model'
import { ForecastService } from '../../services/forecast.service'
import { CurrentWeather } from 'src/app/models/current-weather.model'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  providers: [ForecastService]
})
export class FavoriteComponent implements OnInit {
  @Input() favorite: Locations
  currentWeather: CurrentWeather

  constructor (private forecastServices: ForecastService) {}

  ngOnInit (): void {
    this.getCurrentWeather(this.favorite.locationKey)
  }

  async getCurrentWeather (locationKey: string) {
    try {
      this.currentWeather = await this.forecastServices.getCurrentWeather(
        locationKey
      )
    } catch (e) {
      alert('please try again' + e)
    }
  }
  seeFullForecast (locationKey: string) {}
}
