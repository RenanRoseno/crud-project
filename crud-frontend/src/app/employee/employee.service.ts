import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeEstabl } from '../employee_establ/employee-establ';
import { Establishment } from '../establishment/establishment';
import { FunctionE } from '../function/function';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8081/crud/funcionarios";
  private baseUrlSave = "http://localhost:8081/crud/funcionarios/salvar";
  private baseUrlFunctions = "http://localhost:8081/crud/funcoes";


  constructor(private httpClient: HttpClient) { }

  //------- LIST EMPLOYEES
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  //----- CREATE EMPLOYEES
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrlSave}`, employee);
  }

  //------ VIEW EMPLOYEE BY ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  //------ UPDATE EMPLOYEE
  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }

  //------- DELETE EMPLOYEE
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  //--------- LIST FUNCTIONS
  getFunctions(): Observable<FunctionE[]> {
    return this.httpClient.get<FunctionE[]>(`${this.baseUrlFunctions}`);
  }

}
