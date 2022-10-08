import { Component, Input, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
   selector: "app-landing-page",
   templateUrl: "landing-page.component.html",
   styleUrls: ["landing-page.component.scss"],
})
export class LandingPageComponent implements OnDestroy {

   private unsubscribe = new Subject<void>();

   constructor() {}

   ngOnDestroy() {
      this.unsubscribe.next();
   }
}