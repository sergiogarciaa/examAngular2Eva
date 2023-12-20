import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidato } from 'src/app/modelos/candidato';
import { Puestos } from 'src/app/modelos/puestos';
import { GestionDBService } from 'src/app/servicios/gestion-db.service';

@Component({
  selector: 'app-candidatos-detail',
  templateUrl: './candidatos-detail.component.html',
  styleUrls: ['./candidatos-detail.component.css']
})
export class CandidatosDetailComponent {
  public candidato: any;
  public puesto: any;
  nuevo = true;
  candidatos: Candidato[]  = [];
  puestos: Puestos[]  = [];
  puestoSeleccionado: string = ''; // Variable para almacenar el ID del puesto seleccionado

  constructor(
  private afs: GestionDBService,
  private rutaActiva: ActivatedRoute
  ) {
   
      // Obtén la información de la ruta activa para inicializar 'this.cita'
      const idCandidato = this.rutaActiva.snapshot.params['id'];
      if (idCandidato) {
        // Si hay un ID de cita, obtén la cita de alguna manera (puede ser a través del servicio 'citasServ')
        this.candidato = this.afs.getDocumento('id', idCandidato);
      } else {
        // Si no hay un ID de cita, es una nueva cita
        this.candidato = {}; // Inicializa como un objeto vacío u según tus necesidades
        this.nuevo = true;
      }
   }

  ngOnInit() {  
    this.afs.getColeccion('puesto').pipe().subscribe((puestos: Puestos[]) => {
      this.puestos = puestos;
    });

    if (this.rutaActiva.snapshot.paramMap.get('id')) {
      // Hay id, cargar la cita
      this.afs.coleccion = 'candidato';
      const id = this.rutaActiva.snapshot.paramMap.get('id') || '';
      this.afs.getColeccion(id).subscribe(res => this.candidato = res);
    } else {
      this.afs.coleccion = 'candidato';

    }
  }
  nuevoCandidato() {
    if(this.candidato == null){
      this.candidato = {};
    }
    else{
      console.log(this.candidato);
      this.candidatos.push(this.candidato);
      this.afs.coleccion = 'candidatos';
      this.afs.addDocumento('candidato', this.candidato)
        .then(() => alert('candidadato creado'))
        .catch(error => console.error("No se ha podido crear el candidato", error));
    }
    
  }
}
