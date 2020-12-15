import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/alerts/alerts.service';
import { FunctionE } from '../function';
import { FunctionService } from '../function.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-function',
  templateUrl: './create-function.component.html',
  styleUrls: ['./create-function.component.css']
})
export class CreateFunctionComponent implements OnInit {
  function1 : FunctionE = new FunctionE;

  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;
  
  constructor(private alertService: AlertsService,
    private functionService : FunctionService) { }

  ngOnInit(): void {
  }

  saveFunction(){
    this.functionService.createFunction(this.function1).subscribe( data => {
      this.alertService.success("Cadastrado com Sucesso", "Sucesso");
    }, error => {
      this.alertService.erro("Erro ao Cadastrar", "Erro");
    })
  }

  onSubmit(){
    this.saveFunction();
    
  }

}
