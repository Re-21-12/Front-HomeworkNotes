import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/ActividadModel';
import { Materium } from 'src/app/models/MateriumModel';
import { HomeWorkServiceService } from 'src/app/services/home-work-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form-actividad',
  templateUrl: './form-actividad.component.html',
  styleUrls: ['./form-actividad.component.css'],
})
export class FormActividadComponent implements OnInit {
  //aqui inyecatamos los servicios que vayamos a uusar
  constructor(
    private api: HomeWorkServiceService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  nombreMaterias: string[] = [];
  actividades: Actividad[] = [];
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
    this.obtenerMaterias();
    this.verificarParams();
    if (typeof this.verificarParams()) {
      // Hacer algo si verificarParams() devuelve un número
      this.obtenerActividad();
      // Hacer algo si verificarParams() no devuelve un número
    }
  }
  onSubmit() {
    /*  this.actividad.fechaEntrga = this.getFormattedCurrentDate(this.actividad.fechaEntrga)
     */
    this.api.crearActividad(this.actividad).subscribe((response: any) => {
      console.log(`Respuesta del servidor: ${response}`);
      this.actividad.nombre = '';
      this.actividad.tipo = '';
      this.actividad.nota = 0;
      this.actividad.estado = '';
      this.actividad.fechaEntrega = '';
      this.actividad.materia = '';
      this.router.navigate(['/']);

    }),
      (error: any) => {
        console.error(`Error: ${error}`);
      };
  }

  obtenerMaterias(): void {
    this.api.obtenerMaterias().subscribe((res: Materium[]) => {
      for (let nombreMateriaStr of res) {
        this.nombreMaterias.push(nombreMateriaStr.nombreMateria);
      }
    });
  }

  verificarParams(): number | undefined {
    let id: number | undefined;
    this.activatedRoute.params.subscribe((params) => {
      id = params['id?'];
      if (params['id?'] == ':id') {
        console.log(params['id?']);
        id = undefined;
        return id;
      }
      console.log(id);
    });
    return id;
  }

  onUpdate() {
    
    this.api.editarActividad(this.id!, this.actividad).subscribe((response) => {
      console.log(`Respuesta del servidor: ${response}`);
      this.actividad.id = 0;
      this.actividad.nombre = '';
      this.actividad.tipo = '';
      this.actividad.nota = 0;
      this.actividad.estado = '';
      this.actividad.fechaEntrega = '';
      this.actividad.materia = '';
      this.router.navigate(['/']);
    }),
      (error: any) => {
        console.error(`Error: ${error}`);
      };
  }

  obtenerActividad(){
    this.id = this.verificarParams();
    if (this.id != undefined) {
      console.log(this.id);
      this.api.obtenerActividad(this.id).subscribe((data) => {
        this.actividad = data;
        console.log(this.actividad);
      });
    }
  }
}
