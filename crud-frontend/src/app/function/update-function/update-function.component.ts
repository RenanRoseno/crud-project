import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'src/app/alerts/alerts.service';
import { FunctionE } from '../function';
import { FunctionService } from '../function.service';

@Component({
  selector: 'app-update-function',
  templateUrl: './update-function.component.html',
  styleUrls: ['./update-function.component.css']
})
export class UpdateFunctionComponent implements OnInit {
  id: number;
  function1 : FunctionE = new FunctionE();

  constructor(  
    private functionService : FunctionService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService : AlertsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.functionService.getFunctionById(this.id).subscribe(data => {
      this.function1 = data;
    }, error => console.log(error));
  }

  goToFunctionList(){
    this.router.navigate(['/funcoes']);
  }

  onSubmit() {
    this.functionService.updateFunction(this.id, this.function1).subscribe(data => {
      this.alertService.success("Editado com Sucesso", "Sucesso");
      this.goToFunctionList();

    }, error =>{
      this.alertService.erro("Erro ao editar", "Erro");
    });
  }
}
