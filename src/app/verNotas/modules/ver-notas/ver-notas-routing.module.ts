import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerNotasComponent } from '../../pages/ver-notas/ver-notas.component';

const routes: Routes = [{path: '',component:VerNotasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerNotasRoutingModule { }
