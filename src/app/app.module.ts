import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { HeaderComponent } from './header/header.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { EntrevistasComponent } from './entrevistas/entrevistas.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { CandidatosRoutingModule } from './candidatos/candidatos-routing.module';
import { PuestosComponent } from './puestos/puestos.component';
import { PuestoRoutingModule } from './puestos/puesto-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ContenedorComponent,
    HeaderComponent,
    EntrevistasComponent,
    CandidatosComponent,
    PuestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    CandidatosRoutingModule,
    PuestoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
