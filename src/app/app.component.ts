import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private route: ActivatedRoute, private router: Router) {}
  title = 'herolo-weather-assignment'

  ngOnInit () {
    const element = document.body
    this.route.queryParams.subscribe(queryParams => {
      const mode = queryParams.mode
      if (mode === 'dark-mode') {
        element.classList.add('dark-mode')
        element.classList.remove('light-mode')
      } else {
        element.classList.add('light-mode')
        element.classList.remove('dark-mode')
      }
    })
  }
}