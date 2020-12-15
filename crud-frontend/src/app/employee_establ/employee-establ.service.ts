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
  private baseUrlComplete = "http://localhost:8081/crud/funcionarios/estabelecimentos";
  constructor(private httpClient: HttpClient) { }

  //---------- CREATE RELATION
  createEmployeeEstablishment(employeeEstabl: EmployeeEstabl): Observable<Object> {
    return this.httpClient.post(`${this.baseUrlSave}`, employeeEstabl);
  }
  //---------- LIST RELATIONS
  getEmployeeEstablList(): Observable<EmployeeEstabl[]> {
    return this.httpClient.get<EmployeeEstabl[]>(`${this.baseUrlComplete}`);
  }
  //---------- LIST EMPLOYEES
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  //---------- LIST ESTABLISHMENTS
  getEstablishmentList(): Observable<Establishment[]> {
    return this.httpClient.get<Establishment[]>(`${this.baseUrlE}`);
  }

}
