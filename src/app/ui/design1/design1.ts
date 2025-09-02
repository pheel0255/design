import { Component } from '@angular/core';
import { Location} from '@angular/common'

@Component({
  selector: 'app-design1',
  standalone: false,
  templateUrl: './design1.html',
  styleUrl: './design1.css'
})
export class Design1 {

   selectedNav: string = 'devices';

   constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  selectNav(nav: string) {
   this.selectedNav = nav;
  }

}
