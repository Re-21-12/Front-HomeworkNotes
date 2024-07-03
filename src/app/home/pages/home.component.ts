import { Component, OnInit } from '@angular/core';
import { HomeWorkServiceService } from '../../services/home-work-service.service';
import { Materium } from '../../models/MateriumModel';
import { Actividad } from 'src/app/models/ActividadModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //palabra: string = "asd";
  Materias: string[] = []; // Renombré la variable 'Materia' a 'Materias' para seguir la convención de nombres plural
  Actividades: Actividad[] = []; // Renombré la variable 'Materia' a 'Materias' para seguir la convención de nombres plural
  hover: boolean = false;
  nombre?: string;
  tipo?: string;
  estado?: string;
  materia?: string;
  contenido = [this.nombre, this.tipo, this.estado, this.materia];
  constructor(private api: HomeWorkServiceService) {}

  ngOnInit(): void {
    this.obtenerMaterias();
    /* this.obtenerActividades(); */
    this.filtrarActividades();
  }
  obtenerMaterias() {
    this.api.obtenerMaterias().subscribe(
      (data: Materium[]) => {
        data; // Asigna los datos obtenidos del servicio a la propiedad 'Materias'
        for (let nombreMateria of data) { 
          this.Materias.push(nombreMateria.nombreMateria);
        }
      },
      (error: any) => {
        console.error('Error al obtener las materias:', error); // Maneja los errores en caso de que ocurran
      }
    );
  }
  limpiar() {
    this.nombre = '';
    this.tipo = '';
    this.materia = '';
    this.estado = '';
  }

  obtenerActividades(): Actividad[] {
    let actividades: Actividad[] = [];
    this.api.obtenerActividades().subscribe(
      (data: Actividad[]) => {
        actividades = data; // Asigna los datos obtenidos del servicio a la propiedad 'Materias'
      },
      (error: any) => {
        console.error('Error al obtener las actividades:', error); // Maneja los errores en caso de que ocurran
      }
    );
    return actividades;
  }

  filtrarActividades() {
    //para cambiar el estado del boton
    /*                               */
    this.api
      .filtrarActividades(this.nombre, this.tipo, this.estado, this.materia)
      .subscribe(
        (data: Actividad[]) => {
          this.Actividades = data;
          console.log(this.Actividades);
        },
        (error) => {
          console.error('Error al obtener las actividades:', error); // Maneja los errores en caso de que ocurran
        }
      );
  }
  filtrarNombre() {
    // Llamamos a la función obtenerActividades para obtener la lista completa de actividades
    this.api.obtenerActividades().subscribe(
      (data: Actividad[]) => {
        // Filtramos las actividades por nombre
        this.Actividades = data.filter((actividad) => {
          return actividad.nombre.includes(this.nombre!);
        });
      },
      (error: any) => {
        console.error('Error al obtener las actividades:', error);
      }
    );
  }
  
  //realizamos una fufuncion quue obtenga el id y se lo mandamos al servicio
  onDelete(id?: number) {
    const confirmacion = confirm(
      `¿Estás seguro de que deseas eliminar esta actividad?`
    );
    if (id != undefined && confirmacion)
      this.api.eliminarActividad(id).subscribe(
        (data: Actividad) => {
          console.log(data);
          this.obtenerActividades();
        },
        (error: any) => {
          console.error('Error al obtener las actividades:', error); // Maneja los errores en caso de que ocurran
        }
      );
  }
}
