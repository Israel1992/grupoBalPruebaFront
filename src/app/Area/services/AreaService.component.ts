import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Shared/Services/ApiService.component';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
    

  constructor(private http: HttpClient, private apiService:ApiService) {}
  
  private authToken = environment.token;
  private headers = new HttpHeaders({'Authorization': `Bearer ${this.authToken}`});

  // Método para obtener todas las áreas
  getAreas(): Observable<any> {
    return this.http.get<any>(this.apiService.endpoints.areas, { headers: this.headers });
  }

  // Método para obtener una sola área por su ID
  getAreaById(id: number): Observable<any> {
    const url = `${this.apiService.endpoints.areas}/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Método para crear una nueva área
  createArea(area: any): Observable<any> {
    return this.http.post(this.apiService.endpoints.areas, area, {headers: this.headers});
  }

  // Método para actualizar una área existente
  updateArea(id: number, area: any): Observable<any> {
    const url = `${this.apiService.endpoints.areas}/${id}`;
    return this.http.put(url, area,{headers: this.headers});
  }

  // Método para eliminar un área por su ID
  deleteArea(id: number): Observable<any> {
    const url = `${this.apiService.endpoints.areas}/${id}`;
    return this.http.delete(url, {headers: this.headers});
  }
}