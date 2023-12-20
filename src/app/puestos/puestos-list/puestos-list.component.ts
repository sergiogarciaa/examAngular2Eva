import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puestos } from 'src/app/modelos/puestos';
import { GestionDBService } from 'src/app/servicios/gestion-db.service';

@Component({
  selector: 'app-puestos-list',
  templateUrl: './puestos-list.component.html',
  styleUrls: ['./puestos-list.component.css']
})
export class PuestosListComponent {
  public puesto: any;
  nuevo = true;
  puestos: Puestos[] = [];
  
  constructor(
    private afs: GestionDBService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    // Obtener la lista de candidatos
    this.afs.getColeccion('puesto').subscribe(
      res => this.puestos = res
    )
  }
}
