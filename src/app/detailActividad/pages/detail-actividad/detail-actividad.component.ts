import { Component, OnInit } from '@angular/core';
import { HomeWorkServiceService } from 'src/app/services/home-work-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/models/ActividadModel';
@Component({
  selector: 'app-detail-actividad',
  templateUrl: './detail-actividad.component.html',
  styleUrls: ['./detail-actividad.component.css'],
})
export class DetailActividadComponent implements OnInit {
  constructor(
    private api: HomeWorkServiceService,
    private activatedRoute: ActivatedRoute
  ) {}
  id?: number;

  actividad: Actividad = {
    nombre: '',
    tipo: '',
    nota: 0,
    estado: '',
    materia: '', //Este nombre navigation hace referencia a la materia a la que pertenece
    fechaEntrega: '',
  };
  ngOnInit(): void {
    this.verificarParams();
    this.obtenerActividad();
  }
  obtenerActividad() {
    this.id = this.verificarParams();
    if (this.id != undefined) {
      console.log(this.id);
      this.api.obtenerActividad(this.id).subscribe((data) => {
        this.actividad = data;
        console.log(this.actividad);
      });
    }
  }
  verificarParams(): number | undefined {
    let id: number | undefined;
    this.activatedRoute.params.subscribe((params) => {
      id = params['id'];
      if (params['id'] == ':id') {
        console.log(params['id']);
        id = undefined;
        return id;
      }
      console.log(id);
    });
    return id;
  }
}
