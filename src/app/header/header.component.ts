import { Component, OnInit, Input } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  units: string
  darkmode: boolean

  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const units = queryParams.units
      const mode = queryParams.mode
      this.darkmode = mode === 'dark-mode' ? true : false
      this.units = units === 'fahrenheit' ? 'fahrenheit' : 'celsius'
    })
  }
  toggleLightDarkMode ($event) {
    const mode = $event.target.checked ? 'dark-mode' : 'light-mode'
    const queryParams: Params = { mode: mode }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    })
  }
  togglefahrenheitCelsius ($event) {
    const units = $event.target.checked ? 'fahrenheit' : 'celsius'

    const queryParams: Params = { units: units }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    })
  }
  togglePage (page: string) {
    this.router.navigate([page], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
    })
  }
}
