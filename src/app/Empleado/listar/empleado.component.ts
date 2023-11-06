import { Component } from '@angular/core';
import { EmpleadoService } from '../services/EmpleadoService.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleados: any[] = []; // Aquí almacenaremos los datos de los empleados

  constructor(private empleadoService: EmpleadoService, private router: Router) {}

  ngOnInit() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    
    this.empleadoService.getEmpleados().subscribe((result) => {
      console.log(result);
      if(result.estatus)
        this.empleados = result.datos;
    });
    
  }

  editar(id:number){
    console.log("editar:"+id);
    this.router.navigate(['empleado/crear-editar', id]);
  }

  crear(){
    this.router.navigate(['empleado/crear-editar',0]);
  }


  eliminar(id:number){
    this.empleadoService.deleteEmpleado(id).subscribe((result) => {
      console.log(result);
      if(result.estatus){//Si fue correcto el proceso
        alert(result.msg);
        window.location.reload();
      }else{            //Si hubo un error
        alert(result.msg);
      }
    });
  }


}
