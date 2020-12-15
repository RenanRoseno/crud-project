import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { FunctionE } from 'src/app/models/function';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { EmployeeEstablService } from 'src/app/services/employee-establ.service';
import { EmployeeEstabl } from 'src/app/models/employee-establ';
import { Establishment } from 'src/app/models/establishment';
import { FunctionService } from 'src/app/services/function.service';
import { askAlert, success, successMessage, errorT, errorMessage} from 'src/app/utils/constants';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  name: string;
  // ICONS
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
    private functionService : FunctionService,
    private alertService: AlertsService,
    private router: Router) { }

  ngOnInit(): void {

    this.getEmployees();
    this.getFunctions();
    this.getRelations();
    this.getEstablishment();
  }

  // SEARCH FUNCTION
  search() {
    if (this.name != "") {
      this.employeeService.searchEmployeeList(this.name).subscribe(data =>{
        this.employees = data;
      })
    } else if (this.name == "") {
      this.ngOnInit();
    }
  }
  
  // LIST RELATIONS
  private getRelations(){
    this.employeeEstabService.getEmployeeEstablList().subscribe(data => {
      this.relations = data;
    })
  }

  // LIST ESTABLISHMENTS
  private getEstablishment() {
    this.establishmentService.getEstablishmentList().subscribe(data => {
      this.establishments = data;
    })
  }

  // LIST EMPLOYEES
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  //  UPDATE EMPLOYEE VIEW
  updateEmployee(id: number) {
    this.router.navigate(["funcionarios/editar/", id])
  }

  private getFunctions(){
    this.functionService.getFunctions().subscribe(data=>{
      this.functions = data;
    })
  }

  // DELETE EMPLOYEE
  deleteEmployee(id: number) {
    Swal.fire({
      title: askAlert,
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,

    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id).subscribe(data => {
          console.log(data);
          this.alertService.success(successMessage, success);
          this.getEmployees();
        }, error => {
          this.alertService.erro(errorMessage, errorT);
        });
      } else if (result.isDenied) {

      }
    });


  }
}
