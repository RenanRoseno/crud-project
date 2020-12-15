import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { Establishment } from 'src/app/models/establishment';
import { EstablishmentService } from '../../services/establishment.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { errorMessage, errorT, success, successMessage } from 'src/app/utils/constants';

@Component({
  selector: 'app-create-establishment',
  templateUrl: './create-establishment.component.html',
  styleUrls: ['./create-establishment.component.css']
})
export class CreateEstablishmentComponent implements OnInit {
  establishment: Establishment = new Establishment();

  phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/,];

  // ICONS
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;
  
  constructor(private establishmentService: EstablishmentService,
    private router: Router,
    private alertService: AlertsService) { }

  ngOnInit(): void {

  }

  //REDIRECT
  goToEstablishmentList() {
    this.router.navigate(['/estabelecimentos']);
  }

  // CREATE ESTABLISHMENT
  saveEstablishment() {
    this.establishmentService.createEstablishment(this.establishment).subscribe(data => {
      console.log(data);
      this.alertService.success(successMessage, success);
    },
      error => {
        this.alertService.erro(errorMessage, errorT);
      });
  }

  // BUTTON ACTION
  onSubmit() {
    this.saveEstablishment();
    console.log(this.establishment);
  }
}
