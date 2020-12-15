import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from 'src/app/models/establishment';
import {environment} from 'src/environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  api: string = environment.api + "estabelecimentos/";

  constructor(private httpClient: HttpClient) { }


  searchEstablishmentList(name: string) : Observable<Establishment[]>{
    return this.httpClient.get<Establishment[]>(`${this.api}/search/${name}`)
  }
  //----------- LIST ESTABLISHMENTS
  getEstablishmentList(): Observable<Establishment[]> {
    return this.httpClient.get<Establishment[]>(`${this.api}`);
  }

  //----------- CREATE ESTABLISHMENTS
  createEstablishment(establishment: Establishment): Observable<Object> {
    return this.httpClient.post(`${this.api}`, establishment);
  }

  //---------- VIEW ESTABLISHMENTS BY ID
  getEstablishmentById(id: number): Observable<Establishment> {
    return this.httpClient.get<Establishment>(`${this.api}${id}`);
  }

  // ---------- UPDATE ESTABLISHMENT
  updateEstablishment(id: number, establishment: Establishment): Observable<Object> {
    return this.httpClient.put(`${this.api}${id}`, establishment);
  }

  //---------- DELETE ESTABLISHMENT
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.api}${id}`);
  }
}
