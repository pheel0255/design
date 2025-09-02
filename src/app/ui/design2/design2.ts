import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design2',
  standalone: false,
  templateUrl: './design2.html',
  styleUrl: './design2.css'
})
export class Design2 {

   constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
