import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormMateriaComponent} from '../../pages/form-materia/form-materia.component'
import { FormMateriaRoutingModule } from './form-materia-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormMateriaComponent],
  imports: [
    CommonModule,
    FormMateriaRoutingModule,
    FormsModule
  ]
})
export class FormMateriaModule { }
