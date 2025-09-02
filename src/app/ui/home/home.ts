import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
   showDesign2 = true;
  
  constructor(private router: Router) {
    // Hide Design2 when navigating to other routes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showDesign2 = event.url === '/';
      }
    });
  }

}
