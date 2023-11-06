import { Component } from '@angular/core';
import { AreaService } from '../services/AreaService.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  areas: any[] = []; // Aquí almacenaremos los datos de las áreas


  constructor(private areaService: AreaService, private router: Router) {}

  ngOnInit() {
    this.cargarAreas();
  }

  cargarAreas() {
    
    this.areaService.getAreas().subscribe((result) => {
      console.log(result);
      if(result.estatus)
        this.areas = result.datos;
    });
    
  }


  editar(id:number){
    console.log("editar:"+id);
    this.router.navigate(['area/crear-editar', id]);
  }

  crear(){
    this.router.navigate(['area/crear-editar',0]);
  }
  eliminar(id:number){
    this.areaService.deleteArea(id).subscribe((result) => {
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
