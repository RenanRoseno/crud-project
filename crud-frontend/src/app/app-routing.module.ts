import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeEstablComponent } from './employee_establ/create-employee-establ/create-employee-establ.component';
import { EmployeeEstablListComponent } from './employee_establ/employee-establ-list/employee-establ-list.component';
import { CreateEstablishmentComponent } from './establishment/create-establishment/create-establishment.component';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';

const routes: Routes = [
  {path: 'funcionarios', component: EmployeeListComponent},
  {path: 'funcionarios/cadastrar', component: CreateEmployeeComponent},
  
  {path: 'estabelecimentos', component: EstablishmentListComponent},
  {path: 'estabelecimento/cadastrar', component: CreateEstablishmentComponent},
  
  {path: 'funcionarios-establ', component: EmployeeEstablListComponent},
  {path: 'funcionarios-establ/cadastrar', component: CreateEmployeeEstablComponent},
  {path: '', redirectTo: 'funcionarios', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
