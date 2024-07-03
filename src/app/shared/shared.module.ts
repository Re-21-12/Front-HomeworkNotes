import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//este moduulo sirve para redirigir ruutas
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  //aqui exportamos para quue en otros lados de la aplicacion pueudan sar el fofoter y el header
  exports:[FooterComponent, HeaderComponent]
})
export class SharedModule { }
