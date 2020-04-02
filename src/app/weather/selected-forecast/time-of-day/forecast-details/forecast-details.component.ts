import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { TimeOfDayForecast } from 'src/app/models/time-of-day-forecast.model'
import { ActivatedRoute } from '@angular/router'
import * as constants from '../../../../models/constants'

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {
  @Input() forecast: TimeOfDayForecast
  @Output() windowClosed = new EventEmitter()
  darkmode: boolean = false
  constructor (private route: ActivatedRoute) {}

  ngOnInit (): void {
    this.route.queryParams.subscribe(queryParams => {
      const mode = queryParams.mode
      this.darkmode = mode === constants.theme.darkmode ? true : false
    })
  }
  closeWindow ($event) {
    $event.preventDefault()
    this.windowClosed.emit()
  }
}
