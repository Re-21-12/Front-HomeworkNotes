import { Injectable, OnInit } from '@angular/core';
import { Actividad } from '../models/ActividadModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Materium } from '../models/MateriumModel';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomeWorkServiceService implements OnInit {
  constructor(private http: HttpClient) {}

  /* 
Un Observable en TypeScript es un objeto especial que representa una secuencia de valores emitidos a lo largo del tiempo. Se utiliza para manejar datos asíncronos, como peticiones a APIs, eventos del usuario, o cualquier dato que pueda cambiar con el tiempo. */
  ngOnInit(): void {}
  private url: string = 'https://localhost:7277/api/';
  obtenerMaterias(): Observable<Materium[]> {
    return this.http.get<Materium[]>(`${this.url}Materiums`);
  }
  obtenerActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(`${this.url}Actividads`);
  }

  obtenerMateria(id:number): Observable<Materium> {
    return this.http.get<Materium>(`${this.url}Materiums${id}`);
  }

  obtenerActividad(id:number): Observable<Actividad> {
    return this.http.get<Actividad>(`${this.url}Actividads/${id}`);
  }

  crearMateria(materia: Materium): Observable<Materium> {
    return this.http.post<Materium>(`${this.url}Materiums`, materia);
  }
  //curl https://localhost:7277/api/Actividads
  crearActividad(actividad: Actividad): Observable<Actividad> {
    console.log(actividad);
    return this.http.post<Actividad>(`${this.url}Actividads`, actividad);
  }

  editarMateria(id: number, materia: Materium): Observable<Materium> {
    return this.http.put<Materium>(`${this.url}Materiums/${id}`, materia);
  }

  editarActividad(id: number, actividad: Actividad): Observable<Actividad> {
    return this.http.put<Actividad>(`${this.url}Actividads/${id}`, actividad);
  }
  
  eliminarMateria(id: number): Observable<Materium> {
    return this.http.delete<Materium>(`${this.url}Materiums/${id}`);
  }
  eliminarActividad(id: number): Observable<Actividad> {
    return this.http.delete<Actividad>(`${this.url}Actividads/${id}`);
  }
  filtrarActividades(nombre?:string, tipo?:string, estado?:string, materia?:string):Observable<Actividad[]>{
    //crea dinamicamente las solicutudes qe se van a arealizar al backend a travez de filtros
    let params:string = '';
    if (nombre) params += `nombre=${nombre}&`;
    if (tipo) params += `tipo=${tipo}&`;
    if (estado) params += `estado=${estado}&`;
    if (materia) params += `materia=${materia}&`;

    //si se le envio un parametro
    if(params.length > 0){
      //para eliminar el & al final vas a extraer el texto hasta tu tamanio menos 1
      params = '?' + params.substr(0,params.length - 1)
    }

    return this.http.get<Actividad[]>(`${this.url}Actividads/filtrar${params}`);
  }
}
