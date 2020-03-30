import { Component, OnInit, Input } from '@angular/core'
import { ForecastService } from '../../services/forecast.service'
import { CurrentWeather } from '../../models/current-weather.model'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: CurrentWeather
  loading:boolean


  constructor (private forecastService: ForecastService) {}

  ngOnInit (): void {
  }


}
