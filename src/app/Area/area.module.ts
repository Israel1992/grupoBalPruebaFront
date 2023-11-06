import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './listar/area.component';
import { CrearEditarAreaComponent } from './crear-editar/crear-editar/crear-editar.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AreaComponent,
    CrearEditarAreaComponent
  ],
  imports: [
    CommonModule,
    PopoverModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class AreaModule { }
