import { Component } from '@angular/core';
enum Pages{
  weather = 'weather',
  favorites = 'favorites'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'herolo-weather-assignment';
  loadedPage:string = Pages.weather


  loadNewPage($event){
    this.loadedPage = $event;
  }
}


