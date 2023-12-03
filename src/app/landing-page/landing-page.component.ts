import { Component, Input, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
   selector: "app-landing-page",
   templateUrl: "landing-page.component.html",
   styleUrls: ["landing-page.component.scss"],
})
export class LandingPageComponent implements OnDestroy {

   private _unsubscribe = new Subject<void>();

   constructor() {}

   ngOnDestroy() {
      this._unsubscribe.next();
      this._unsubscribe.complete();
   }
}