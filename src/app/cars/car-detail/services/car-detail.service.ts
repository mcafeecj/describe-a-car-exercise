import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CarDetailService implements OnDestroy {

   private _unsubscribe = new Subject<void>();

   constructor() {}

   ngOnDestroy(): void {
      this._unsubscribe.next();
      this._unsubscribe.complete();
   }
}