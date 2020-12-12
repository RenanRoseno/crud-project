import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from './establishment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  private baseUrl = 'http://localhost:8081/crud/estabelecimentos'
  constructor(private httpClient : HttpClient) { }

  getEstablishmentList() : Observable<Establishment[]>{
    return this.httpClient.get<Establishment[]>(`${this.baseUrl}`);
  }
}
