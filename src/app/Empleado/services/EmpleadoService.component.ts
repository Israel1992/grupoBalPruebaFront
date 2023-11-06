import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Shared/Services/ApiService.component';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
    

  constructor(private http: HttpClient, private apiService:ApiService) {}
  
  private authToken = environment.token;
  private headers = new HttpHeaders({'Authorization': `Bearer ${this.authToken}`});

  // Método para obtener todas las áreas
  getEmpleados(): Observable<any> {
    return this.http.get<any>(this.apiService.endpoints.empleados, { headers: this.headers });
  }

  // Método para obtener una sola área por su ID
  getEmpleadoById(id: number): Observable<any> {
    const url = `${this.apiService.endpoints.empleados}/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Método para crear una nueva área
  createEmpleado(empleado: any): Observable<any> {
    return this.http.post(this.apiService.endpoints.empleados, empleado, {headers: this.headers});
  }

  // Método para actualizar una área existente
  updateEmpleado(id: number, empleado: any): Observable<any> {
    const url = `${this.apiService.endpoints.empleados}/${id}`;
    return this.http.put(url, empleado,{headers: this.headers});
  }

  // Método para eliminar un área por su ID
  deleteEmpleado(id: number): Observable<any> {
    const url = `${this.apiService.endpoints.empleados}/${id}`;
    return this.http.delete(url, {headers: this.headers});
  }
}