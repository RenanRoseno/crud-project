import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'src/app/alerts/alerts.service';
import { FunctionE } from 'src/app/function/function';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/,];
  id: number;
  functions : FunctionE[];

  constructor(private employeeService: EmployeeService,
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
  goToEmployeeList(){
    this.router.navigate(['/funcionarios']);
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.alertService.success("Editado com Sucesso", "Sucesso");
      this.goToEmployeeList();

    }, error =>{
      this.alertService.erro("Erro ao editar", "Erro");
    });
  }
  private getFunctions(){
    this.employeeService.getFunctions().subscribe(data=>{
      this.functions = data;
    })
  }

}
