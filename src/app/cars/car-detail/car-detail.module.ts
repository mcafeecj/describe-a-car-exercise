import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from "@angular/material/button";

import { ReactiveFormsModule } from "@angular/forms";
import { CarDetailViewComponent } from "./views/car-detail-view.component";
import { CarDetailComponent } from "./containers/car-detail.component";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
   imports: [CommonModule, MatTableModule, MatDialogModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, MatOptionModule, MatSelectModule, ReactiveFormsModule],
   declarations: [CarDetailComponent, CarDetailViewComponent],
   exports: [CarDetailComponent, CarDetailViewComponent],
})
export class CarDetailModule {}