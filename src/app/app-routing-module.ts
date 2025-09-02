import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './ui/home/home';
import { Design3 } from './ui/design3/design3';
import { Design1 } from './ui/design1/design1';
import { Design2 } from './ui/design2/design2';

const routes: Routes = [
 
  {
    path: '',
    component: Design2,
  },

  { 
   path: 'bluetooth',
   component: Design3
},

   {
    path: 'usage',
    component: Design1
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
