import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormActividadRoutingModule } from './form-actividad-routing.module';
import { FormActividadComponent } from '../../pages/form-actividad/form-actividad.component';


@NgModule({
  declarations: [FormActividadComponent],
  imports: [
    CommonModule,
    FormActividadRoutingModule,
    FormsModule
  ]
})
export class FormActividadModule { }
