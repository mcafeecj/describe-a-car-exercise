import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";

import { ReactiveFormsModule } from "@angular/forms";
import { CarListComponent } from "./containers/car-list.component";
import { CarListViewComponent } from "./views/car-list-view.component";

@NgModule({
   imports: [CommonModule, MatTableModule, MatDialogModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule],
   declarations: [CarListComponent, CarListViewComponent],
   exports: [CarListComponent, CarListViewComponent],
})
export class CarListModule {}