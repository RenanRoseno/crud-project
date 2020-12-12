import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeEstablListComponent } from './employee_establ/employee-establ-list/employee-establ-list.component';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';

const routes: Routes = [
  {path: 'funcionarios', component: EmployeeListComponent},
  {path: 'estabelecimentos', component: EstablishmentListComponent},
  {path: 'funcionarios-establ', component: EmployeeEstablListComponent},
  {path: '', redirectTo: 'funcionarios', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
