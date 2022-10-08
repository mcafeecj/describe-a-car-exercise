import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page.component";

@NgModule({
   imports: [CommonModule, RouterModule],
   declarations: [LandingPageComponent],
   exports: [LandingPageComponent],
})
export class LandingPageModule {}