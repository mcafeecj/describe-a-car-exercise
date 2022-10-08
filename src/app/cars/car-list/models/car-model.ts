import { CarColor } from "./car-color.enum";

export class CarModel {
    carId: number;
    make: string;
    model: string;
    year: number;
    mileage: number;
    exteriorColor: CarColor;
    interiorColor: CarColor;
}