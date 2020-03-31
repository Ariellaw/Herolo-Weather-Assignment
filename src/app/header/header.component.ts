import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(  private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
