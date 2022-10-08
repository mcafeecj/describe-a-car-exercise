import { CarColor } from "./car-color.enum";
import { CarModel } from "./car-model";

export class CarListTableModel {
   carId: number;
   make: string;
   model: string;
   year: number;
   mileage: number;
   exteriorColor: CarColor;
   interiorColor: CarColor;

   constructor(carModel: CarModel) {
      this.carId = carModel.carId;
      this.make = carModel.make;
      this.model = carModel.model
      this.year = carModel.year;
      this.mileage = carModel.mileage;
      this.exteriorColor = carModel.exteriorColor;
      this.interiorColor = carModel.interiorColor;
   }
}