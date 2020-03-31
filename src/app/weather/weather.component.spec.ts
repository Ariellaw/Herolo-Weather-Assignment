import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WeatherComponent } from './weather.component'
import { WeeklyForecast } from '../models/weekly-forecast.model'
import { weeklyForecastMockData } from '../mock-data/weeklyForecast'

describe('WeatherComponent', () => {
  let component: WeatherComponent
  let fixture: ComponentFixture<WeatherComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent)
    component = fixture.componentInstance
    component.weeklyForecast = WeeklyForecast.fromJson(weeklyForecastMockData)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('choose new location and verify that it loaded', () => {
    //choose new location
    let compiled = fixture.nativeElement
    const locationInput = compiled.querySelector('#locationInput')
    locationInput.value = 'New York, United States'
    fixture.detectChanges()

    fixture.whenStable().then(() => {
      expect(component.weeklyForecast[2].dayofWeek).toBe()
    })

    //make sure that 5 day forecast is there

    //click everyday, for each day:
    // make sure that both day and night appear
    // make sure that description appears

    //click currentweather
    //make sure that current weather is there.
  })
})
