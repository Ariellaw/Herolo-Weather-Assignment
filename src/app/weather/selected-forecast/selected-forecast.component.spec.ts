import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrWeatherComponent } from './selected-forecast.component';

describe('CurrWeatherComponent', () => {
  let component: CurrWeatherComponent;
  let fixture: ComponentFixture<CurrWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
