import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { Establishment } from '../models/establishment';
import { EmployeeEstabl } from '../models/employee-establ';
import {environment} from 'src/environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class EmployeeEstablService {

  api: string = environment.api + "funcionarios-estabelecimentos/";

  constructor(private httpClient: HttpClient) {}

  //---------- CREATE RELATION
  createEmployeeEstablishment(employeeEstabl: EmployeeEstabl): Observable<Object> {
    return this.httpClient.post(`${this.api}`, employeeEstabl);
  }
  //---------- LIST RELATIONS
  getEmployeeEstablList(): Observable<EmployeeEstabl[]> {
    return this.httpClient.get<EmployeeEstabl[]>(`${this.api}`);
  }


}
