import { Component, OnInit } from '@angular/core';
import { Materium } from 'src/app/models/MateriumModel';
import { HomeWorkServiceService } from 'src/app/services/home-work-service.service';

@Component({
  selector: 'app-form-materia',
  templateUrl: './form-materia.component.html',
  styleUrls: ['./form-materia.component.css'],
})
export class FormMateriaComponent implements OnInit {
  constructor(private api: HomeWorkServiceService) {}
  materia: Materium = {
    nombreMateria: '',
    actividads: [],
  };

  ngOnInit(): void {
    this.materia.actividads = [];
    this.materia.nombreMateria = '';
  }

  onSubmit() {
    this.api.crearMateria(this.materia).subscribe((response: any) => {
      console.log(`Respuesta del servidor: ${response}`);
      this.materia.actividads = [];
      this.materia.nombreMateria = '';
    }),
      (error: any) => {
        console.error(`Error: ${error}`);
      };  
  }
}
