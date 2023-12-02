import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from "@angular/material/button";

import { ReactiveFormsModule } from "@angular/forms";
import { CarListComponent } from "./containers/car-list.component";
import { CarListViewComponent } from "./views/car-list-view.component";

@NgModule({
   imports: [CommonModule, MatTableModule, MatDialogModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule],
   declarations: [CarListComponent, CarListViewComponent],
   exports: [CarListComponent, CarListViewComponent],
})
export class CarListModule {}