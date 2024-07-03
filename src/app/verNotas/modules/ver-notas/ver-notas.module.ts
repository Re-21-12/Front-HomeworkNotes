import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerNotasRoutingModule } from './ver-notas-routing.module';
import { VerNotasComponent } from '../../pages/ver-notas/ver-notas.component';


@NgModule({
  declarations: [VerNotasComponent],
  imports: [
    CommonModule,
    VerNotasRoutingModule
  ]
})
export class VerNotasModule { }
