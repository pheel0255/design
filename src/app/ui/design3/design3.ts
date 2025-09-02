import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-design3',
  standalone: false,
  templateUrl: './design3.html',
  styleUrl: './design3.css'
})
export class Design3 {

  currentDate
  selectedAction: string = 'away';

  
constructor(private location: Location) {const now = new Date();
    this.currentDate = now.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  goBack() {
    this.location.back();
  }

  selectAction(action: string) {
  this.selectedAction = action;
}
}
