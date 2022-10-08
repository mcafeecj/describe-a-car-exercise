import { FormControl } from "@angular/forms";

export class CarDetailForm {
    make: FormControl = new FormControl();
    model: FormControl = new FormControl();
    year: FormControl = new FormControl();
    mileage: FormControl = new FormControl();
    exteriorColor: FormControl = new FormControl();
    interiorColor: FormControl = new FormControl();
}