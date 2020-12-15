import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/alerts/alerts.service';
import { Establishment } from '../establishment';
import { EstablishmentService } from '../establishment.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-establishment',
  templateUrl: './create-establishment.component.html',
  styleUrls: ['./create-establishment.component.css']
})
export class CreateEstablishmentComponent implements OnInit {
  establishment: Establishment = new Establishment();

  phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/,];

  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;
  
  constructor(private establishmentService: EstablishmentService,
    private router: Router,
    private alertService: AlertsService) { }

  ngOnInit(): void {

  }

  goToEstablishmentList() {
    this.router.navigate(['/estabelecimentos']);
  }

  saveEstablishment() {
    this.establishmentService.createEstablishment(this.establishment).subscribe(data => {
      console.log(data);
      this.alertService.success("Sucesso ao cadastrar", "Sucesso");
    },
      error => {
        this.alertService.erro("Erro ao Cadastrar", "Erro");
      });
  }

  onSubmit() {
    this.saveEstablishment();
    console.log(this.establishment);
  }
}
