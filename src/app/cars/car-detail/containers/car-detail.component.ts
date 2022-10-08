import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { CarDetailService } from "../services/car-detail.service";


@Component({
   selector: "rmx-car-detail",
   templateUrl: "car-detail.component.html",
   viewProviders: [CarDetailService],
})
export class CarDetailComponent implements OnDestroy {

   private unsubscribe = new Subject<void>();

   constructor(private carDetailService: CarDetailService) {

   }

   ngOnDestroy() {
      this.unsubscribe.next();
   }
}
