import { Component, OnInit, Input } from '@angular/core'
import { DailyForecast } from '../../models/daily-forecast.model'

@Component({
  selector: 'app-selected-forecast',
  templateUrl: './selected-forecast.component.html',
  styleUrls: ['./selected-forecast.component.scss']
})
export class SelectedWeatherComponent implements OnInit {
  @Input() forecast: DailyForecast

  constructor () {}

  ngOnInit () {}
}
