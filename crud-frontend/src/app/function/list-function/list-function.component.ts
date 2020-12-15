import { Component, OnInit } from '@angular/core';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { FunctionE } from 'src/app/function/function';
import { FunctionService } from '../function.service';
import { AlertsService } from 'src/app/alerts/alerts.service';

@Component({
  selector: 'app-list-function',
  templateUrl: './list-function.component.html',
  styleUrls: ['./list-function.component.css']
})
export class ListFunctionComponent implements OnInit {
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;
  functionSea: string;
  functions : FunctionE[];

  constructor( private functionService : FunctionService, 
    private router : Router,
    private alertService: AlertsService) { }

  ngOnInit(): void {
    this.getFunctions();
  }

  search() {
    if (this.functionSea != "") {
      this.functions = this.functions.filter(res => {
        return res.function.toLocaleLowerCase().match(this.functionSea.toLocaleLowerCase())
      })
    } else if (this.functionSea == "") {
      this.ngOnInit();
    }
  }

  private getFunctions(){
    this.functionService.getFunctions().subscribe( data => {
      this.functions = data;
    })
  }

  updateFunction(id: number) {
    this.router.navigate(["funcoes/editar/", id])
  }

  deleteFunction(id: number) {
    Swal.fire({
      title: 'Deseja realmente excluir?',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.functionService.deleteFunction(id).subscribe(data => {
          console.log(data);
          this.alertService.success("Excluido com sucesso", "Sucesso");
          this.getFunctions();
        }, erro => {
          this.alertService.erro("Existem funcionários atribuídos a essa função! Altere a função deles para excluir", "Erro");
        });
      } else if (result.isDenied) {

      }
    });


  }

}
