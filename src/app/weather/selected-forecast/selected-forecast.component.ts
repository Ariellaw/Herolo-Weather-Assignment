import { Component, OnInit, Input } from '@angular/core'
import { ForecastService } from '../../services/forecast.service'
import { DailyForecast } from '../../models/daily-forecast.model'

@Component({
  selector: 'app-selected-forecast',
  templateUrl: './selected-forecast.component.html',
  styleUrls: ['./selected-forecast.component.scss']
})
export class SelectedWeatherComponent implements OnInit {
  @Input() forecast: DailyForecast

  constructor (private forecastService: ForecastService) {}

  ngOnInit () {
    // this.getCurrentWeather(55);
  }

  async getCurrentWeather (locationKey) {
    // this.currWeather = await this.forecastService.getCurrentWeather(locationKey);
  }
}
