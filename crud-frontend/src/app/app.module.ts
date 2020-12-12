import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EstablishmentListComponent } from './establishment/establishment-list/establishment-list.component';
import { EmployeeEstablListComponent } from './employee_establ/employee-establ-list/employee-establ-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EstablishmentListComponent,
    EmployeeEstablListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
