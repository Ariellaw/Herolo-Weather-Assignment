import { Component, OnInit, Input } from '@angular/core';
import { DailyForecast } from 'src/app/models/daily-forecast.model';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  @Input() forecast:DailyForecast;
  @Input() darkmode:boolean;
  @Input() isLoadingWeeklyForecast:boolean;
  constructor() { }

  ngOnInit(): void {
  }


}
