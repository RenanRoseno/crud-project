import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { FunctionE } from 'src/app/function/function';

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

  functions : FunctionE[];
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {

    this.getEmployees();
    this.getFunctions();
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
