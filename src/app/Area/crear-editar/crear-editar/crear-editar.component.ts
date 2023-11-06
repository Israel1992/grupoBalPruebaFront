import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../../services/AreaService.component';

@Component({
  selector: 'app-crear-editar',
  templateUrl: './crear-editar.component.html',
  styleUrls: ['./crear-editar.component.css']
})
export class CrearEditarAreaComponent implements OnInit {


  areaForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private areaService: AreaService) {
    
    this.areaForm = this.fb.group({
      idArea: [''], // Puedes dejarlo en blanco para que se genere automáticamente al crear
      descripcion: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      const id = +params['id']; 

        if(id != 0){
          this.areaService.getAreaById(id).subscribe((result) => {
            console.log(result);
            if(result.estatus){//Si fue correcto el proceso
              this.areaForm.setValue({
                idArea:result.dato.idArea,
                descripcion:result.dato.descripcion
              });
            }else{            //Si hubo un error
              alert(result.msg);
            }
          });
        }
    });

  }

  ngOnInit(): void {}

  guardar() {
    // Lógica para guardar o actualizar el área
    if (this.areaForm) {
      const formData = this.areaForm.value;
      // Aquí puedes enviar los datos al servidor o realizar la acción que desees
      console.log(formData);

      if (formData.idArea) {
        console.log("editamos");
        // Estás en modo edición: realiza la lógica de actualización
        this.areaService.updateArea(formData.idArea, formData).subscribe((result) => {
          console.log(result);
          if(result.estatus){//Si fue correcto el proceso
            alert(result.msg);
          }else{            //Si hubo un error
            alert(result.msg);
          }
        });
      } else {
        console.log("creamos");
        // Estás en modo creación: realiza la lógica de creación
        this.areaService.createArea(formData).subscribe((result) => {
          console.log(result);
          if(result.estatus){//Si fue correcto el proceso
            alert(result.msg);
          }else{            //Si hubo un error
            alert(result.msg);
          }
        });
      }
    }
  }


}
