import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';
import { EmployeeEstablListComponent } from './employee_establ/employee-establ-list/employee-establ-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateEstablishmentComponent } from './establishment/create-establishment/create-establishment.component';
import { CreateEmployeeEstablComponent } from './employee_establ/create-employee-establ/create-employee-establ.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'
import {TextMaskModule} from 'angular2-text-mask';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateEstablishmentComponent } from './establishment/update-establishment/update-establishment.component';  

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EstablishmentListComponent,
    EmployeeEstablListComponent,
    CreateEmployeeComponent,
    CreateEstablishmentComponent,
    CreateEmployeeEstablComponent,
    UpdateEmployeeComponent,
    UpdateEstablishmentComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
