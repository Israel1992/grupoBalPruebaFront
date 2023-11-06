import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../services/EmpleadoService.component';
import { AreaService } from 'src/app/Area/services/AreaService.component';

@Component({
  selector: 'app-crear-editar',
  templateUrl: './crear-editar.component.html',
  styleUrls: ['./crear-editar.component.css']
})
export class CrearEditarEmpleadoComponent implements OnInit {


  empleadoForm: FormGroup;
  seleccion: number = 0;
  areas: any[] = [];

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private empleadoService: EmpleadoService,
    private areaService: AreaService,
    private router: Router) {
    
    this.empleadoForm = this.fb.group({
      IdEmpleado:[0],
      Nombre: ['', Validators.required],
      Correo: [''],
      Telefono: [''],
      IdArea: ['']
    });

    this.route.params.subscribe(params => {
      const id = +params['id']; 

        if(id != 0){
          this.empleadoService.getEmpleadoById(id).subscribe((result) => {
            console.log(result);
            if(result.estatus){//Si fue correcto el proceso
              this.empleadoForm.setValue({
                IdEmpleado:result.dato.idEmpleado,
                Nombre:result.dato.nombre,
                Correo:result.dato.correo,
                Telefono:result.dato.telefono,
                IdArea:result.dato.idArea
              });
            }else{            //Si hubo un error
              alert(result.msg);
            }
          });
        }
    });
  }

  cargarAreas() {
    this.areaService.getAreas().subscribe((result) => {
      console.log(result);
      if(result.estatus){
        this.areas = result.datos;
        if(this.areas.length==0){
          alert("Debe crear áreas antes de generar un nuevo empleado.");
        }
      }
        
    });
    
  }


  ngOnInit(): void {
    this.cargarAreas();
  }

  guardar() {
    // Lógica para guardar o actualizar el área
    if (this.empleadoForm) {
      const formData = this.empleadoForm.value;
      // Aquí puedes enviar los datos al servidor o realizar la acción que desees
      console.log(formData);
      
      if (formData.IdEmpleado != 0) {
        console.log("editamos");
        // Estás en modo edición: realiza la lógica de actualización
        this.empleadoService.updateEmpleado(formData.IdEmpleado, formData).subscribe((result) => {
          console.log(result);
          if(result.estatus){//Si fue correcto el proceso
            alert(result.msg);
            this.router.navigate(['empleado/listar']);
          }else{            //Si hubo un error
            alert(result.msg);
          }
        });
      } else {
        console.log("creamos");
        // Estás en modo creación: realiza la lógica de creación
        this.empleadoService.createEmpleado(formData).subscribe((result) => {
          console.log(result);
          if(result.estatus){//Si fue correcto el proceso
            alert(result.msg);
            this.router.navigate(['empleado/listar']);
          }else{            //Si hubo un error
            alert(result.msg);
          }
        });
      }
      
    }
  }


}
