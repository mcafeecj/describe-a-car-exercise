import { Component, OnDestroy } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { CarModel } from "../models/car-model";
import { CarListService } from "../services/car-list.service";


@Component({
   selector: "app-car-list",
   templateUrl: "car-list.component.html",
   viewProviders: [CarListService],
})
export class CarListComponent implements OnDestroy {
   cars: Observable<Array<CarModel>>;

   private unsubscribe = new Subject<void>();

   constructor(private carListService: CarListService) {
      this.cars = this.carListService.cars;
   }

   ngOnDestroy() {
      this.unsubscribe.next();
   }

   openDialog(){
      this.carListService.openDialog();
   }
}
