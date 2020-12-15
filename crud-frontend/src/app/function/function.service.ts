import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FunctionE } from './function';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

 
  private baseUrl = "http://localhost:8081/crud/funcoes";
  private baseUrlSave = "http://localhost:8081/crud/funcoes/salvar";
  
  constructor(private httpClient : HttpClient) { }

  getFunctions():Observable<FunctionE[]>{
    return this.httpClient.get<FunctionE[]>(`${this.baseUrl}`);
  } 

  createFunction(function1 : FunctionE) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrlSave}`, function1);
  };

  getFunctionById(id: number): Observable<FunctionE> {
    return this.httpClient.get<FunctionE>(`${this.baseUrl}/${id}`);
  }

  updateFunction(id: number, function1 : FunctionE): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, function1);
  };

  deleteFunction(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  };

}
