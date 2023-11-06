import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './Area/listar/area.component';
import { CrearEditarAreaComponent } from './Area/crear-editar/crear-editar/crear-editar.component';
import { EmpleadoComponent } from './Empleado/listar/empleado.component';
import { CrearEditarEmpleadoComponent } from './Empleado/crear-editar/crear-editar.component';

const routes: Routes = [
  { path: 'area/listar', component: AreaComponent },
  { path: 'area/crear-editar/:id', component: CrearEditarAreaComponent },
  { path: 'empleado/listar', component: EmpleadoComponent },
  { path: 'empleado/crear-editar/:id', component: CrearEditarEmpleadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
