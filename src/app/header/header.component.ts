import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  units:string
  darkmode:boolean

  constructor(  private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // let id = this.activatedRoute.snapshot.paramMap.get('id')
    // let location = this.activatedRoute.snapshot.paramMap.get('locationName')

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.units = queryParams.units
      const mode = queryParams.mode
      this.darkmode = mode === 'dark-mode' ? true : false

    })
  }
  toggleLightDarkMode(mode:string) {
    const queryParams: Params = { mode: mode };
  
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams, 
        queryParamsHandling: 'merge',
      });
  }
  togglefahrenheitCelsius(units:string){
    const queryParams: Params = { units: units };
  
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams, 
        queryParamsHandling: 'merge',
      });
  }
  togglePage(page:string){
  
    this.router.navigate(
      [page], 
      {
        relativeTo: this.activatedRoute,
        queryParamsHandling: 'merge', 
      });
  }
}
