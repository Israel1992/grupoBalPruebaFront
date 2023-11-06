import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiBaseUrl = environment.apiBaseUrl;
  public endpoints = {
    login: `${this.apiBaseUrl}/Authentication/login`,
    areas: `${this.apiBaseUrl}/Areas`,
    empleados: `${this.apiBaseUrl}/Empleados`,
  };

}