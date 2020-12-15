
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { Establishment } from '../../models/establishment';
import { EmployeeEstabl } from '../../models/employee-establ';
import { EmployeeEstablService } from '../../services/employee-establ.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-create-employee-establ',
  templateUrl: './create-employee-establ.component.html',
  styleUrls: ['./create-employee-establ.component.css']
})
export class CreateEmployeeEstablComponent implements OnInit {
  employees: Employee[];
  establishments: Establishment[];
  employeeEstabl: EmployeeEstabl = new EmployeeEstabl();

  constructor(private employeeEstablService: EmployeeEstablService,
    private router: Router,
    private employeeService : EmployeeService,
    private establishmentService : EstablishmentService,
    private alertService: AlertsService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.getEstablishment();
    this.employeeEstabl.id_employee = 0;
    this.employeeEstabl.id_establishment = 0;
  }
  //------- LIST EMPLOYEES
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
//---------- LIST ESTABLISHMENT
  private getEstablishment() {
    this.establishmentService.getEstablishmentList().subscribe(data => {
      this.establishments = data;
    })
  }
//---------- CREATE RELATION  
  saveEmployeeEstabl() {
    this.employeeEstablService.createEmployeeEstablishment(this.employeeEstabl).subscribe(data => {
      this.alertService.success('Cadastrado com Sucesso', "Sucesso");
      console.log(data);
    },
      error => {
        this.alertService.success('Erro ao Cadastrar', "Sucesso");
        console.log(error);
      });
  }
  
  // REDIRECT
  goToEmployeeList() {
    this.router.navigate(['/funcionarios']);
  }

  //----- BUTTON ACTION
  onSubmit() {
    console.log(this.employeeEstabl);
    this.saveEmployeeEstabl();

  }
}
