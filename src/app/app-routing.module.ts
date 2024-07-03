import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/modules/home.module').then(
        (moduloPrincipal) => moduloPrincipal.HomeModule
      ),
  },
  {
    path: 'formularioMateria/:id?',
    loadChildren: () =>
      import(
        '../app/formMateria/modules/form-materia/form-materia.module'
      ).then((moduloPrincipal) => moduloPrincipal.FormMateriaModule),
  },
  {
    /* Se va a activar cuando le manden un parametro */
    path: 'formularioActividad/:id?',
    loadChildren: () =>
      import(
        '../app/formActividad/modules/form-actividad/form-actividad.module'
      ).then((moduloPrincipal) => moduloPrincipal.FormActividadModule),
  },
  {
    path: 'detallarActividad/:id',
    loadChildren: () =>
      import(
        '../app/detailActividad/modules/detail-actividad/detail-actividad.module'
      ).then((moduloPrincipal) => moduloPrincipal.DetailActividadModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
