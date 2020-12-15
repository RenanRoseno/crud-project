import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FunctionE } from '../models/function';
import {environment} from 'src/environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  
  // URL
  api: string = environment.api + "funcoes/";
 
  constructor(private httpClient: HttpClient) { }

  searchFunctions(name : string):Observable<FunctionE[]>{
    return this.httpClient.get<FunctionE[]>(`${this.api}/search/${name}`);
  }
  //------ LIST FUNCTIONS
  getFunctions(): Observable<FunctionE[]> {
    return this.httpClient.get<FunctionE[]>(`${this.api}`);
  }

  // ---------  CREATE FUNCTION
  createFunction(function1: FunctionE): Observable<Object> {
    return this.httpClient.post(`${this.api}`, function1);
  };

  // ---------- VIEW FUNCTION BY ID
  getFunctionById(id: number): Observable<FunctionE> {
    return this.httpClient.get<FunctionE>(`${this.api}${id}`);
  }

  //----------- UPDATE FUNCTION
  updateFunction(id: number, function1: FunctionE): Observable<Object> {
    return this.httpClient.put(`${this.api}${id}`, function1);
  };

  // ---------- DELETE FUNCTION
  deleteFunction(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.api}${id}`);
  };

}
