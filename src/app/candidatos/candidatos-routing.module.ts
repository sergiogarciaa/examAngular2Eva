import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosComponent } from './candidatos.component';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';

const routes: Routes = [
  {path: '', component: CandidatosComponent},
  { path: 'listado-candidatos', component: CandidatosListComponent },
  { path: 'editar-candidato/:id', component: CandidatosDetailComponent },
  { path: 'nuevo-candidato', component: CandidatosDetailComponent },
  { path: '', redirectTo: 'listado-de-candidadtos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CandidatosRoutingModule { }
