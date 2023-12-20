import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puestos } from 'src/app/modelos/puestos';
import { GestionDBService } from 'src/app/servicios/gestion-db.service';

@Component({
  selector: 'app-puestos-detail',
  templateUrl: './puestos-detail.component.html',
  styleUrls: ['./puestos-detail.component.css']
})
export class PuestosDetailComponent {
  public puesto: any;
  nuevo = true;
  puestos: Puestos[]  = [];
  constructor(
  private afs: GestionDBService,
  private rutaActiva: ActivatedRoute
  ) {
      // Obtén la información de la ruta activa para inicializar 'this.cita'
      const idPuesto = this.rutaActiva.snapshot.params['id'];
      if (idPuesto) {
        // Si hay un ID de cita, obtén la cita de alguna manera (puede ser a través del servicio 'citasServ')
        this.puesto = this.afs.getDocumento('id', idPuesto);
      } else {
        // Si no hay un ID de cita, es una nueva cita
        this.puesto = {}; // Inicializa como un objeto vacío u según tus necesidades
        this.nuevo = true;
      }
   }

  ngOnInit() {

    if (this.rutaActiva.snapshot.paramMap.get('id')) {
      // Hay id, cargar la cita
      this.afs.coleccion = 'puesto';
      const id = this.rutaActiva.snapshot.paramMap.get('id') || '';
      this.afs.getColeccion(id).subscribe(res => this.puesto = res);
    } else {
      this.afs.coleccion = 'puesto';
      this.afs.addDocumento('candidato', this.puesto).then(res => console.log(res));
    }
  }

  nuevoPuesto() {
    console.log(this.puesto);
    this.puestos.push(this.puesto);
    this.afs.coleccion = 'puesto';
    this.afs.addDocumento('puesto', this.puesto)
      .then(() => alert('puesto creado'))
      .catch(error => console.error("No se ha podido crear el puesto", error));
  }
}
