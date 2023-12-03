import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIcon } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
 
import { ReactiveFormsModule } from "@angular/forms";
import { CarDetailViewComponent } from "./views/car-detail-view.component";
import { CarDetailComponent } from "./containers/car-detail.component";
import { MatDialog } from "@angular/material/dialog";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";

@NgModule({
   imports: [CommonModule, MatTableModule, MatDialog, ReactiveFormsModule, MatInput, MatIcon, MatButton, MatOption, MatSelect, ReactiveFormsModule],
   declarations: [CarDetailComponent, CarDetailViewComponent],
   exports: [CarDetailComponent, CarDetailViewComponent],
})
export class CarDetailModule {}