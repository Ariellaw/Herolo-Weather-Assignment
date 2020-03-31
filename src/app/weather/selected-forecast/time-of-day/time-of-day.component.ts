import { Component, OnInit, Input } from '@angular/core'
import { TimeOfDayForecast } from 'src/app/models/time-of-day-forecast.model'

@Component({
  selector: 'app-time-of-day',
  templateUrl: './time-of-day.component.html',
  styleUrls: ['./time-of-day.component.scss']
})
export class TimeOfDayComponent implements OnInit {
  @Input() partOfDay: string
  @Input() forecast: TimeOfDayForecast
  windowOpened: boolean = false

  constructor () {}

  ngOnInit (): void {}
}
