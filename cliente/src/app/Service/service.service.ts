import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Model/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url = 'http://localhost:9090/api/clientes';

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get(`${this.Url}`);
  }

  getPersonaId(id: string) {
    return this.http.get(`${this.Url}/${id}`);
  }

  deletePersona(id: number) {
    return this.http.delete(`${this.Url}/${id}`);
  }

  createPersona(persona: Persona) {
    return this.http.post(`${this.Url}`, persona);
  }

  updatePersona(id: string | number, updatePersona: Persona) {
    return this.http.put(`${this.Url}/${id}`, updatePersona);
  }
}
