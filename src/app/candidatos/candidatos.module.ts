import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { CandidatosRoutingModule } from './candidatos-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent,
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    FormsModule
  ]
})
export class CandidatosModule { }
