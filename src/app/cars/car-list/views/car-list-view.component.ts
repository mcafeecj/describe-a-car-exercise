import { Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subject  } from "rxjs";
import { debounceTime, takeUntil} from "rxjs/operators"
import { CarColor } from "../models/car-color.enum";
import { CarListTableModel } from "../models/car-list-table.model";
import { CarModel } from "../models/car-model";

@Component({
   selector: "app-car-list-view",
   templateUrl: "car-list-view.component.html",
   styleUrls: ["car-list-view.component.scss"],
})
export class CarListViewComponent implements OnDestroy {
   @Input() set cars(value: Array<CarModel>){
      if(value){
         this._cars = value;
         this.filterTable();
      }
   }

   @Output() openDialogClicked = new EventEmitter();

   displayedColumns: string[] = ['make', 'model', 'year', 'mileage', 'exteriorColor', 'interiorColor'];

   carColor = CarColor;

   searchControl = new FormControl("");

   carsTableData: Array<CarListTableModel> = []

   private _cars: Array<CarModel> = [];

   private unsubscribe = new Subject<void>();

   constructor() {
      this.searchControl.valueChanges.pipe(debounceTime(100), takeUntil(this.unsubscribe)).subscribe(() => {
         this.filterTable();
      });
   }

   ngOnDestroy() {
      this.unsubscribe.next();
   }

   openDialog(){
      this.openDialogClicked.emit();
   }

   onRowClick(row: CarListTableModel){
      alert(`You've chosen the ${row.year} ${CarColor[row.exteriorColor]} ${row.make} ${row.model} which has ${row.mileage.toLocaleString('en')} miles.`);
   }

   private filterTable(){
      const searchString: string = this.searchControl.value.toLowerCase();

      this.carsTableData = this._cars
         .filter((t) => t.make.toLowerCase().includes(searchString))
         .map((t) => new CarListTableModel(t));

      this.carsTableData = this._cars.filter((car) => {
         return (
            car.make.toLowerCase().indexOf(searchString) !==
               -1 ||
            car.model.toLowerCase().indexOf(searchString) !==
               -1 ||
            car.mileage.toString().toLowerCase().indexOf(searchString) !==
               -1 ||
            car.mileage.toLocaleString('en').toLowerCase().indexOf(searchString) !== 
               -1 ||
            car.year.toString().toLowerCase().indexOf(searchString) !==
               -1 ||
            CarColor[car.exteriorColor].toString().toLowerCase().indexOf(searchString) !==
               -1 ||
            CarColor[car.interiorColor].toString().toLowerCase().indexOf(searchString) !==
               -1
         );
      });

      this.carsTableData = this.carsTableData.map((car)=> new CarListTableModel(car));
   }
}