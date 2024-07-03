import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormActividadComponent } from '../../pages/form-actividad/form-actividad.component';

const routes: Routes = [{path: '', component: FormActividadComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormActividadRoutingModule { }
