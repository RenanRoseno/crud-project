import { Component, OnInit } from '@angular/core';
import { Establishment } from 'src/app/models/establishment';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { errorMessage, errorT, success, successMessage } from 'src/app/utils/constants';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.css']
})
export class EstablishmentListComponent implements OnInit {
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;
  name : string;
  establishments: Establishment[];

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router,
    private alertService : AlertsService) { }

  ngOnInit(): void {
    this.getEstablishment();
  }
  search() {
    if (this.name != "") {
      this.establishmentService.searchEstablishmentList(this.name).subscribe(data => {
        this.establishments = data;
      });
    } else if (this.name == "") {
      this.ngOnInit();
    }
  }

  private getEstablishment() {
    this.establishmentService.getEstablishmentList().subscribe(data => {
      this.establishments = data;
    })
  }

  updateEstablishment (id:number){
    this.router.navigate(['estabelecimentos/editar', id])
  }
  
  deleteEstablishment(id:number){
    Swal.fire({
      title: 'Deseja realmente excluir?',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.establishmentService.deleteEmployee(id).subscribe(data =>{
          console.log(data);
          this.alertService.success(successMessage, success);
          this.getEstablishment();
        }, erro => {
          this.alertService.erro(errorMessage, errorT);
        });
      } else if (result.isDenied) {
       
      }else{
        
      }
    });

    
  }
}
