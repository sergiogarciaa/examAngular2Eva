import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuestosComponent } from './puestos.component';
import { PuestosDetailComponent } from './puestos-detail/puestos-detail.component';
import { PuestosListComponent } from './puestos-list/puestos-list.component';

const routes: Routes = [
  {path: '', component: PuestosComponent},
  { path: 'ver-puestos', component: PuestosListComponent },
  { path: 'editar-puesto/:id', component: PuestosDetailComponent },
  { path: 'nuevo-puesto', component: PuestosDetailComponent },
  { path: '', redirectTo: 'listado-de-puestos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PuestoRoutingModule { }
