import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { CarDetailService } from "../services/car-detail.service";


@Component({
   selector: "app-car-detail",
   templateUrl: "car-detail.component.html",
   viewProviders: [CarDetailService],
})
export class CarDetailComponent implements OnDestroy {

   private _unsubscribe = new Subject<void>();

   constructor(private carDetailService: CarDetailService) {

   }

   ngOnDestroy() {
      this._unsubscribe.next();
      this._unsubscribe.complete();
   }
}
