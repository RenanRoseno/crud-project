import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';
import { Establishment } from '../establishment/establishment';
import { EmployeeEstabl } from './employee-establ';

@Injectable({
  providedIn: 'root'
})
export class EmployeeEstablService {
  private baseUrl = "http://localhost:8081/crud/funcionarios";
  private baseUrlSave = "http://localhost:8081/crud/funcionarios/estabelecimentos/salvar";
  private baseUrlE = 'http://localhost:8081/crud/estabelecimentos'
  constructor(private httpClient: HttpClient) { }

  createEmployeeEstablishment(employeeEstabl:EmployeeEstabl): Observable<Object>{
    return this.httpClient.post(`${this.baseUrlSave}`, employeeEstabl);
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  getEstablishmentList() : Observable<Establishment[]>{
    return this.httpClient.get<Establishment[]>(`${this.baseUrlE}`);
  }

}
