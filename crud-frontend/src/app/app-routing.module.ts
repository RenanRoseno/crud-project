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

const routes: Routes = [

  // CRUD FUNCIONÁRIOS ROUTES
  {path: 'funcionarios', component: EmployeeListComponent},
  {path: 'funcionarios/cadastrar', component: CreateEmployeeComponent},
  {path: 'funcionarios/editar/:id', component: UpdateEmployeeComponent},
  
  // CRUD ESTABELECIMENTO ROUTES
  {path: 'estabelecimentos', component: EstablishmentListComponent},
  {path: 'estabelecimento/cadastrar', component: CreateEstablishmentComponent},
  {path: 'estabelecimentos/editar/:id', component: UpdateEstablishmentComponent},
  
  
  // CRUD FUNÇÕES ROUTES
  {path: 'funcoes', component:ListFunctionComponent},
  {path: 'funcoes/cadastrar', component:CreateFunctionComponent},
  {path: 'funcoes/editar/:id', component:UpdateFunctionComponent},

  // CREATE RELATION ROUTES
  {path: 'funcionarios-establ', component: CreateEmployeeEstablComponent},
  {path: 'funcionarios-establ/cadastrar', component: CreateEmployeeEstablComponent},
  
  
  {path: '', redirectTo: 'funcionarios', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
