import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidato } from 'src/app/modelos/candidato';
import { Puestos } from 'src/app/modelos/puestos';
import { GestionDBService } from 'src/app/servicios/gestion-db.service';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.css']
})
export class CandidatosListComponent {
  public candidato: any;
  nuevo = true;
  candidatos: Candidato[] = [];

  constructor(
    private afs: GestionDBService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    // Obtener la lista de candidatos
    this.afs.getColeccion('candidato').subscribe(
      res => this.candidatos = res
    )
  }

}
