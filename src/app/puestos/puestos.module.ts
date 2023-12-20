import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PuestosComponent } from './puestos.component';
import { PuestosDetailComponent } from './puestos-detail/puestos-detail.component';
import { PuestoRoutingModule } from './puesto-routing.module';
import { PuestosListComponent } from './puestos-list/puestos-list.component';

@NgModule({
  declarations: [
    PuestosDetailComponent,
    PuestosListComponent,
  ],
  imports: [
    CommonModule,
    PuestoRoutingModule,
    FormsModule
  ]
})
export class PuestosModule { }
