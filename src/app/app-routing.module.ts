import { NotfoundComponent } from './components/notfound/notfound.component';
import { DeclaracionesComponent } from './components/declaraciones/declaraciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "declaraciones",
    pathMatch: "full"
  },
  {
    path: "declaraciones",
    component: DeclaracionesComponent
  },
  {
    path: "notfound",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
