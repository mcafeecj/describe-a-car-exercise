import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListModule } from './cars/car-list/car-list.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarDetailModule } from './cars/car-detail/car-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    CarListModule,
    CarDetailModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
