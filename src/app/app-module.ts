import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Design1 } from './ui/design1/design1';
import { Design2 } from './ui/design2/design2';
import { Design3 } from './ui/design3/design3';
import { Home } from './ui/home/home';

@NgModule({
  declarations: [
    App,
    Design1,
    Design2,
    Design3,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
