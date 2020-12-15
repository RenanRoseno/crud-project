import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/alerts/alerts.service';
import { FunctionE } from 'src/app/function/function';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  functions : FunctionE[];
  
  employee: Employee = new Employee();

  phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/,/[0-9]/,/[0-9]/,];
  
  // ICONS
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private employeeService : EmployeeService,
    private router : Router,
    private alertService: AlertsService) { }

  ngOnInit(): void {
    this.getFunctions();
    this.employee.id_function = 0;
  }
  
  // REDIRECT
  goToEmployeeList(){
    this.router.navigate(['/funcionarios']);
  }

  //CREATE EMPLOYEE
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.alertService.success("Cadastrado com Sucesso", "Sucesso");
    },
    error => {
      this.alertService.erro("Erro ao Cadastrar", "Erro");
    });
  }
  onSubmit(){
    this.saveEmployee();
    console.log(this.employee);
  }

  // LIST FUNCTIONS
  private getFunctions(){
    this.employeeService.getFunctions().subscribe(data=>{
      this.functions = data;
    })
  }
}
