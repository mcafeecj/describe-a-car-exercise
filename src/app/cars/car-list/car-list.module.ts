import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIcon } from '@angular/material/icon'

import { ReactiveFormsModule } from "@angular/forms";
import { CarListComponent } from "./containers/car-list.component";
import { CarListViewComponent } from "./views/car-list-view.component";
import { MatTable } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";

@NgModule({
   imports: [CommonModule, MatTable, MatDialog, ReactiveFormsModule, MatInput, MatIcon, MatButton],
   declarations: [CarListComponent, CarListViewComponent],
   exports: [CarListComponent, CarListViewComponent],
})
export class CarListModule {}