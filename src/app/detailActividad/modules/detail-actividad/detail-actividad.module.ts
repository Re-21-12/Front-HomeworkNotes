import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailActividadRoutingModule } from './detail-actividad-routing.module';
import { DetailActividadComponent } from '../../pages/detail-actividad/detail-actividad.component';


@NgModule({
  declarations: [DetailActividadComponent],
  imports: [
    CommonModule,
    DetailActividadRoutingModule
  ]
})
export class DetailActividadModule { }
