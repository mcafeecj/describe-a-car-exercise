import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CarDetailService implements OnDestroy {

   private unsubscribe = new Subject<void>();

   constructor() {}

   ngOnDestroy(): void {
      this.unsubscribe.next();
   }
}