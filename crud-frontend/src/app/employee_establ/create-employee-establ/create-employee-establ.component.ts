
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee/employee';
import { Establishment } from '../../establishment/establishment';
import { EmployeeEstabl } from '../employee-establ';
import  Swal from 'sweetalert2';
// ES6 Modules or TypeScript



import { EmployeeEstablService } from '../employee-establ.service';
import { AlertsService } from 'src/app/alerts/alerts.service';

@Component({
  selector: 'app-create-employee-establ',
  templateUrl: './create-employee-establ.component.html',
  styleUrls: ['./create-employee-establ.component.css']
})
export class CreateEmployeeEstablComponent implements OnInit {
  employees: Employee[];
  establishments: Establishment[];
  employeeEstabl: EmployeeEstabl = new EmployeeEstabl();

  constructor(private employeeEstablService : EmployeeEstablService, 
    private router: Router,
    private alertService : AlertsService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.getEstablishment();
  }
  private getEmployees() {
    this.employeeEstablService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  private getEstablishment() {
    this.employeeEstablService.getEstablishmentList().subscribe(data => {
      this.establishments = data;
    })
  }
  goToEmployeeList(){
    this.router.navigate(['/funcionarios']);
  }

  saveEmployeeEstabl(){
    this.employeeEstablService.createEmployeeEstablishment(this.employeeEstabl).subscribe(data =>{
      this.alertService.success('Cadastrado com Sucesso', "Sucesso");
      console.log(data);
    },
    error => {
      this.alertService.success('Erro ao Cadastrar', "Sucesso");
      console.log(error);
    });
  }
  onSubmit(){
    console.log(this.employeeEstabl);
    this.saveEmployeeEstabl();
    
  }
}
