import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject  } from "rxjs";
import { CarColor, carColorArray  } from "../../car-list/models/car-color.enum";
import { CarDetailComponent } from "../containers/car-detail.component";
import { CarDetailForm } from "../models/car-detail-form.model";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-car-detail-view",
  templateUrl: "car-detail-view.component.html",
  styleUrls: ["car-detail-view.component.scss"],
})
export class CarDetailViewComponent implements OnDestroy {

    makes: Array<string> = [];

    carColors: Record<string, string> = {};

    exteriorColors: Array<string> = [];

    interiorColors: Array<string> = [];

    form: CarDetailForm;
    
    formGroup: FormGroup;

    private _unsubscribe = new Subject<void>();

    constructor(public dialogRef: MatDialogRef<CarDetailComponent>, private fb: FormBuilder) {
      this.form = new CarDetailForm();
      this.formGroup = this.fb.group(this.form);

      this.makes = ["Chevrolet", "Ford", "Hyundai", "Kia", "Toyota"];

      this.carColors = carColorArray.reduce((acc, color) => {
          acc[color] = color;
          return acc;
      }, {} as Record<string, string>);

      this.exteriorColors = [...Object.keys(this.carColors)];
      this.interiorColors = [...Object.keys(this.carColors)];
    }

   ngOnDestroy() {
      this._unsubscribe.next();
      this._unsubscribe.complete();
   }

   onCancel(){
        this.dialogRef.close();
   }
}