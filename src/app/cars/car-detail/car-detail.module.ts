import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";

import { ReactiveFormsModule } from "@angular/forms";
import { CarDetailViewComponent } from "./views/car-detail-view.component";
import { CarDetailComponent } from "./containers/car-detail.component";
import { MatLegacyOptionModule as MatOptionModule } from "@angular/material/legacy-core";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";

@NgModule({
   imports: [CommonModule, MatTableModule, MatDialogModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, MatOptionModule, MatSelectModule, ReactiveFormsModule],
   declarations: [CarDetailComponent, CarDetailViewComponent],
   exports: [CarDetailComponent, CarDetailViewComponent],
})
export class CarDetailModule {}