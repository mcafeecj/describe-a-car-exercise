import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CarDetailViewComponent } from "./views/car-detail-view.component";
import { CarDetailComponent } from "./containers/car-detail.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
   imports: [
      CommonModule,
      MatDialogModule,
      ReactiveFormsModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatOptionModule,
      MatSelectModule,
   ],
   declarations: [CarDetailComponent, CarDetailViewComponent],
   exports: [CarDetailComponent, CarDetailViewComponent],
})
export class CarDetailModule {}
