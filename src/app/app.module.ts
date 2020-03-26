import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeaderComponent } from './header/header.component';
import { SelectedWeatherComponent} from './weather/selected-forecast/selected-forecast.component';
import { CurrWeatherComponent } from './weather/curr-weather/curr-weather.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FavoritesComponent,
    HeaderComponent,
    SelectedWeatherComponent,
    CurrWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
