import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment.prod'
import { FunctionE } from '../models/function';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api: string = environment.api + "funcionarios/";

  constructor(private httpClient: HttpClient) { }


  searchEmployeeList(name: string) : Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}/search/${name}`);
  }
  //------- LIST EMPLOYEES
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}`);
  }

  //----- CREATE EMPLOYEES
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.api}`, employee);
  }

  //------ VIEW EMPLOYEE BY ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.api}${id}`);
  }

  //------ UPDATE EMPLOYEE
  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.api}${id}`, employee);
  }

  //------- DELETE EMPLOYEE
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.api}${id}`);
  }

}
