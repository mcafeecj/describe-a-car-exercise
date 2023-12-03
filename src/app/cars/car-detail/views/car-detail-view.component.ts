import { Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatLegacyDialogRef as MatDialogRef } from "@angular/material/legacy-dialog";
import { Subject  } from "rxjs";
import { CarColor } from "../../car-list/models/car-color.enum";
import { CarDetailComponent } from "../containers/car-detail.component";
import { CarDetailForm } from "../models/car-detail-form.model";

@Component({
   selector: "app-car-detail-view",
   templateUrl: "car-detail-view.component.html",
   styleUrls: ["car-detail-view.component.scss"],
})
export class CarDetailViewComponent implements OnDestroy {

   makes: Array<string> = [];

   carColors = CarColor;

   colors: Array<string> = [];

   exteriorColors: Array<string>;

   interiorColors: Array<string>;

   form: CarDetailForm;

   formGroup: FormGroup;

   private _unsubscribe = new Subject<void>();

   constructor(public dialogRef: MatDialogRef<CarDetailComponent>, private fb: FormBuilder) {
    this.form = new CarDetailForm();
    this.formGroup = this.fb.group(this.form);

    this.makes = ["Chevrolet","Ford","Hyundai","Kia","Toyota"];

    this.colors = Object.keys(this.carColors).filter(color => !isNaN(Number(color)));

    this.colors = this.colors.sort((a,b)=>{
        const aName = CarColor[a].toUpperCase();
        const bName = CarColor[b].toUpperCase();

        if (aName < bName) {
            return -1;
          }
          if (aName > bName) {
            return 1;
          }
          return 0;
        });

    this.exteriorColors = [...this.colors];
    this.interiorColors = [...this.colors];
   }

   ngOnDestroy() {
        this._unsubscribe.next();
   }

   onCancel(){
        this.dialogRef.close();
   }
}