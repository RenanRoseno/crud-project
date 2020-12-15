import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { FunctionE } from 'src/app/models/function';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FunctionService } from 'src/app/services/function.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  // MASKS
  employee: Employee = new Employee();
  phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/,];
  
  id: number;
  functions : FunctionE[];
  
  // ICONS
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private employeeService: EmployeeService,
    private functionService:FunctionService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService : AlertsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
    this.getFunctions();
  }
  // REDIRECT
  goToEmployeeList(){
    this.router.navigate(['/funcionarios']);
  }
  //ACTION BUTTON
  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.alertService.success("Editado com Sucesso", "Sucesso");
      this.goToEmployeeList();

    }, error =>{
      this.alertService.erro("Erro ao editar", "Erro");
    });
  }
  // LIST FUNCTIONS
  private getFunctions(){
    this.functionService.getFunctions().subscribe(data=>{
      this.functions = data;
    })
  }

}
