import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './ui/home/home';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
