import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMateriaComponent } from '../../pages/form-materia/form-materia.component';

const routes: Routes = [{path:'', component:FormMateriaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMateriaRoutingModule { }
