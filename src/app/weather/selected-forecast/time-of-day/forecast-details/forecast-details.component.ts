import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimeOfDayForecast } from 'src/app/models/time-of-day-forecast.model';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {
  @Input() forecast:TimeOfDayForecast
  @Output() windowClosed = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  closeWindow(){
    this.windowClosed.emit();
  }
}
