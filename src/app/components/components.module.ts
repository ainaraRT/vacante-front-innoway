import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeclaracionesComponent } from './declaraciones/declaraciones.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotfoundComponent,
    DeclaracionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class ComponentsModule { }
