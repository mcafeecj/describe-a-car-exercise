import { Injectable, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { CarDetailComponent } from "../../car-detail/containers/car-detail.component";
import { CarColor } from "../models/car-color.enum";
import { CarListTableModel } from "../models/car-list-table.model";
import { CarModel } from "../models/car-model";

@Injectable()
export class CarListService implements OnDestroy {
   cars: Observable<Array<CarModel>>;

   private _cars = new BehaviorSubject<Array<CarModel>>([]);

   private unsubscribe = new Subject<void>();

   constructor(private dialog: MatDialog) {
      this.cars = this._cars.asObservable();
      this.getCars();
   }

   ngOnDestroy(): void {
      this.unsubscribe.next();
   }

   openDialog(){
      const dialogRef = this.dialog.open(CarDetailComponent, {
         height: '500px',
         width: '600px',
      });
   
       dialogRef.afterClosed().subscribe(result => {
         const currentCars = this._cars.value;
         const carIDs = currentCars.map((car)=>car.carId);

         const newCar: CarModel = result.value;

         const carToAdd = new CarModel();
         carToAdd.carId = Math.max(...carIDs) + 1;
         carToAdd.make = newCar.make;
         carToAdd.model = newCar.model;
         carToAdd.year = newCar.year;
         carToAdd.mileage = newCar.mileage;
         carToAdd.exteriorColor = newCar.exteriorColor;
         carToAdd.interiorColor = newCar.interiorColor;

         currentCars.push(carToAdd);
         this._cars.next([...currentCars]);
      });
   }
   
   private getCars() {
      const cars = new Array<CarModel>();

      const car1 = new CarModel();
      car1.carId = 1;
      car1.make = 'Ford';
      car1.model = 'Fusion';
      car1.year = 2018;
      car1.mileage = 50937;
      car1.exteriorColor = CarColor.Blue;
      car1.interiorColor = CarColor.Black;
      cars.push(car1);

      const car2 = new CarModel();
      car2.carId = 2;
      car2.make = 'Hyundai';
      car2.model = 'Elantra';
      car2.year = 2013;
      car2.mileage = 65000;
      car2.exteriorColor = CarColor.Gray;
      car2.interiorColor = CarColor.Black;
      cars.push(car2);

      const car3 = new CarModel();
      car3.carId = 3;
      car3.make = 'Ford';
      car3.model = 'Escape';
      car3.year = 2017;
      car3.mileage = 75000;
      car3.exteriorColor = CarColor.White;
      car3.interiorColor = CarColor.Gray;
      cars.push(car3);

      const car4 = new CarModel();
      car4.carId = 4;
      car4.make = 'Toyota';
      car4.model = 'Camry';
      car4.year = 1996;
      car4.mileage = 170500;
      car4.exteriorColor = CarColor.White;
      car4.interiorColor = CarColor.Gray;
      cars.push(car4);

      const car5 = new CarModel();
      car5.carId = 5;
      car5.make = 'Chevrolet';
      car5.model = 'Cruze';
      car5.year = 2016;
      car5.mileage = 82001;
      car5.exteriorColor = CarColor.Blue;
      car5.interiorColor = CarColor.Black;
      cars.push(car5);

      const car6 = new CarModel();
      car6.carId = 6;
      car6.make = 'Kia';
      car6.model = 'Rio';
      car6.year = 2015;
      car6.mileage = 68000;
      car6.exteriorColor = CarColor.Gray;
      car6.interiorColor = CarColor.Black;
      cars.push(car6);

      const car7 = new CarModel();
      car7.carId = 7;
      car7.make = 'Ford';
      car7.model = 'Ranger';
      car7.year = 2011;
      car7.mileage = 125000;
      car7.exteriorColor = CarColor.Gold;
      car7.interiorColor = CarColor.Black;
      cars.push(car7);

      this._cars.next(cars); 
   }
}