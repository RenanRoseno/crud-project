import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateEstablishmentComponent } from './establishment/create-establishment/create-establishment.component';
import { CreateEmployeeEstablComponent } from './employee_establ/create-employee-establ/create-employee-establ.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'
import {TextMaskModule} from 'angular2-text-mask';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateEstablishmentComponent } from './establishment/update-establishment/update-establishment.component';  
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {DataTablesModule} from 'angular-datatables';
import { CreateFunctionComponent } from './function/create-function/create-function.component';
import { UpdateFunctionComponent } from './function/update-function/update-function.component';
import { ListFunctionComponent } from './function/list-function/list-function.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EstablishmentListComponent,
    CreateEmployeeComponent,
    CreateEstablishmentComponent,
    CreateEmployeeEstablComponent,
    UpdateEmployeeComponent,
    UpdateEstablishmentComponent,
    CreateFunctionComponent,
    UpdateFunctionComponent,
    ListFunctionComponent,

  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    TextMaskModule,
    SweetAlert2Module,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
