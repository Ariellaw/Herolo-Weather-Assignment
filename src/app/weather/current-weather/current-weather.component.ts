import { Component, OnInit, Input } from '@angular/core'
import { CurrentWeather } from '../../models/current-weather.model'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: CurrentWeather
  @Input() units:string
  @Input() locationName:string


  constructor () {}

  ngOnInit (): void {
  }


}
