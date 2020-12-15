import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from './establishment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  private baseUrl = 'http://localhost:8081/crud/estabelecimentos'
  private baseUrlSave = 'http://localhost:8081/crud/estabelecimentos/salvar'
  constructor(private httpClient: HttpClient) { }

  //----------- LIST ESTABLISHMENTS
  getEstablishmentList(): Observable<Establishment[]> {
    return this.httpClient.get<Establishment[]>(`${this.baseUrl}`);
  }

  //----------- CREATE ESTABLISHMENTS
  createEstablishment(establishment: Establishment): Observable<Object> {
    return this.httpClient.post(`${this.baseUrlSave}`, establishment);
  }

  //---------- VIEW ESTABLISHMENTS BY ID
  getEstablishmentById(id: number): Observable<Establishment> {
    return this.httpClient.get<Establishment>(`${this.baseUrl}/${id}`);
  }

  // ---------- UPDATE ESTABLISHMENT
  updateEstablishment(id: number, establishment: Establishment): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, establishment);
  }

  //---------- DELETE ESTABLISHMENT
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
