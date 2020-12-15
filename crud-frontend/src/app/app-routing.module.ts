import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CreateEmployeeEstablComponent } from './employee_establ/create-employee-establ/create-employee-establ.component';
import { CreateEstablishmentComponent } from './establishment/create-establishment/create-establishment.component';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';
import { UpdateEstablishmentComponent } from './establishment/update-establishment/update-establishment.component';
import { CreateFunctionComponent } from './function/create-function/create-function.component';
import { ListFunctionComponent } from './function/list-function/list-function.component';
import { UpdateFunctionComponent } from './function/update-function/update-function.component';
import { createEmployee, editEmployee, listEmployee, listEstablishment, createEstablishment, editEstablishment, listFunction, createFunction, editFunction, listEmployeeEstabl, createEmployeeEstabl} from './utils/constants';

const routes: Routes = [

  // CRUD FUNCIONÁRIOS ROUTES
  {path: listEmployee, component: EmployeeListComponent},
  {path: createEmployee, component: CreateEmployeeComponent},
  {path: editEmployee, component: UpdateEmployeeComponent},
  
  // CRUD ESTABELECIMENTO ROUTES
  {path: listEstablishment, component: EstablishmentListComponent},
  {path: createEstablishment, component: CreateEstablishmentComponent},
  {path: editEstablishment, component: UpdateEstablishmentComponent},
  
  
  // CRUD FUNÇÕES ROUTES
  {path: listFunction, component:ListFunctionComponent},
  {path: createFunction, component:CreateFunctionComponent},
  {path: editFunction, component:UpdateFunctionComponent},

  // CREATE RELATION ROUTES
  {path: listEmployeeEstabl, component: CreateEmployeeEstablComponent},
  {path: createEmployeeEstabl, component: CreateEmployeeEstablComponent},
  
  {path: '', redirectTo: listEmployee, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
