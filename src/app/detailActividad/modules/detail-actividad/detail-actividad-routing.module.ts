import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailActividadComponent } from '../../pages/detail-actividad/detail-actividad.component';

const routes: Routes = [{path:'',component:DetailActividadComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailActividadRoutingModule { }
