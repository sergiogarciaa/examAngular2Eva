import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrevistasListComponent } from './entrevistas-list/entrevistas-list.component';
import { EntrevistasDetailComponent } from './entrevistas-detail/entrevistas-detail.component';



@NgModule({
  declarations: [
    EntrevistasListComponent,
    EntrevistasDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntrevistasModule { }
