import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routes: Routes = [
    { path: '', component: BienvenidaComponent },
    { path: 'candidatos', loadChildren: () => import('./candidatos/candidatos.module').then(m => m.CandidatosModule)},
    { path: 'entrevistas', loadChildren: () => import('./entrevistas/entrevistas.module').then(m => m.EntrevistasModule)},
    { path: 'puestos', loadChildren: () => import('./puestos/puestos.module').then(m => m.PuestosModule)},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
