import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoComponent } from './listar/empleado.component';
import { CrearEditarEmpleadoComponent } from './crear-editar/crear-editar.component';



@NgModule({
  declarations: [
    EmpleadoComponent,
    CrearEditarEmpleadoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class EmpleadoModule { }
