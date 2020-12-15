import { Component, OnInit } from '@angular/core';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { FunctionE } from 'src/app/models/function';
import { FunctionService } from '../../services/function.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-list-function',
  templateUrl: './list-function.component.html',
  styleUrls: ['./list-function.component.css']
})
export class ListFunctionComponent implements OnInit {
  functionSea: string;
  functions: FunctionE[];

  //----- ICONS 
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private functionService: FunctionService,
    private router: Router,
    private alertService: AlertsService) { }

  ngOnInit(): void {
    this.getFunctions();
  }

  //------- SEARCH FUNCTION
  search() {
    if (this.functionSea != "") {
      this.functionService.searchFunctions(this.functionSea).subscribe(data => {
        this.functions = data;
      });
    } else if (this.functionSea == "") {
      this.ngOnInit();
    }
  }

  //------- LIST FUNCTION
  private getFunctions() {
    this.functionService.getFunctions().subscribe(data => {
      this.functions = data;
    })
  }

  //-------- UPDATE PAGE FUNCTION
  updateFunction(id: number) {
    this.router.navigate(["funcoes/editar/", id])
  }

  //-------- DELETE FUNCTION
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
