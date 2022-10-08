import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './cars/car-list/containers/car-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [{path: '', component: LandingPageComponent}, {path: 'car-list', component: CarListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
