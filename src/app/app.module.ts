import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { WeatherComponent } from './weather/weather.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { HeaderComponent } from './header/header.component'
import { SelectedWeatherComponent } from './weather/selected-forecast/selected-forecast.component'
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component'
import { TimeOfDayComponent } from './weather/selected-forecast/time-of-day/time-of-day.component'
import { FavoriteComponent } from './favorites/favorite/favorite.component'
import { RouterModule, Routes } from '@angular/router'
import { ErrorMessageComponent } from './error-message/error-message.component'
import { ForecastDetailsComponent } from './weather/selected-forecast/time-of-day/forecast-details/forecast-details.component';
import { DailyForecastComponent } from './weather/daily-forecast/daily-forecast.component'

// import { MatDatepickerModule } from '@angular/material'
// import { MatNativeDateModule } from '@angular/material'

const appRoutes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: ':locationName/:id', component: WeatherComponent },
  { path: 'home', component: WeatherComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FavoritesComponent,
    HeaderComponent,
    SelectedWeatherComponent,
    CurrentWeatherComponent,
    TimeOfDayComponent,
    FavoriteComponent,
    ErrorMessageComponent,
    ForecastDetailsComponent,
    DailyForecastComponent
  ],
  imports: [
    // MatDatepickerModule,
    // MatNativeDateModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  // providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
