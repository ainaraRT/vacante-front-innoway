import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeclaracionesComponent } from './declaraciones/declaraciones.component';



@NgModule({
  declarations: [
    NotfoundComponent,
    DeclaracionesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
