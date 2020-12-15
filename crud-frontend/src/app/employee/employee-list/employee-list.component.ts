import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { FunctionE } from 'src/app/function/function';
import { EstablishmentService } from 'src/app/establishment/establishment.service';
import { EmployeeEstablService } from 'src/app/employee_establ/employee-establ.service';
import { EmployeeEstabl } from 'src/app/employee_establ/employee-establ';
import { Establishment } from 'src/app/establishment/establishment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  name: string;
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;

  relations : EmployeeEstabl[];
  establishments : Establishment[];
  functions : FunctionE[];
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private establishmentService : EstablishmentService,
    private employeeEstabService : EmployeeEstablService,
    private router: Router) { }

  ngOnInit(): void {

    this.getEmployees();
    this.getFunctions();
    this.getRelations();
    this.getEstablishment();
  }

  search() {
    if (this.name != "") {
      this.employees = this.employees.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    } else if (this.name == "") {
      this.ngOnInit();
    }
  }
  
  private getRelations(){
    this.employeeEstabService.getEmployeeEstablList().subscribe(data => {
      this.relations = data;
    })
  }

  private getEstablishment() {
    this.establishmentService.getEstablishmentList().subscribe(data => {
      this.establishments = data;
    })
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  updateEmployee(id: number) {
    this.router.navigate(["funcionarios/editar/", id])
  }

  private getFunctions(){
    this.employeeService.getFunctions().subscribe(data=>{
      this.functions = data;
    })
  }

  deleteEmployee(id: number) {
    Swal.fire({
      title: 'Deseja realmente excluir?',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id).subscribe(data => {
          console.log(data);
          this.getEmployees();
        });
      } else if (result.isDenied) {

      }
    });


  }
}
