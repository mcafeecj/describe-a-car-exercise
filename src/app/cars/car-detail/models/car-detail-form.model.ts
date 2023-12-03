import { FormControl, FormGroup } from "@angular/forms";


type CarFormData = {
  make: string,
  model: string;
  year: number;
  mileage: number;
  exteriorColor: string;
  interiorColor: string;
};

export class CarDetailForm {
  make: FormControl = new FormControl();
  model: FormControl = new FormControl();
  year: FormControl = new FormControl();
  mileage: FormControl = new FormControl();
  exteriorColor: FormControl = new FormControl();
  interiorColor: FormControl = new FormControl();

  formGroup: FormGroup = new FormGroup({
    make: this.make,
    model: this.model,
    year: this.year,
    mileage: this.mileage,
    exteriorColor: this.exteriorColor,
    interiorColor: this.interiorColor,
  } as { [key in keyof CarFormData]: FormControl });
}
