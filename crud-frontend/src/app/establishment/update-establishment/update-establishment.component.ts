import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { Establishment } from 'src/app/models/establishment';
import { EstablishmentService } from '../../services/establishment.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { errorMessage, errorT, success, successMessage } from 'src/app/utils/constants';

@Component({
  selector: 'app-update-establishment',
  templateUrl: './update-establishment.component.html',
  styleUrls: ['./update-establishment.component.css']
})
export class UpdateEstablishmentComponent implements OnInit {
  // MASKS
  phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/,];

  id: number;
  establishment: Establishment = new Establishment();
  
  // ICONS
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private establishmentService: EstablishmentService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService : AlertsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.establishmentService.getEstablishmentById(this.id).subscribe(data => {
      this.establishment = data;
    }, error => console.log(error));
  }

  //REDIRECT
  goToEstablishmentList() {
    this.router.navigate(['/estabelecimentos']);
  }

  // BUTTON ACTION
  onSubmit() {
    this.establishmentService.updateEstablishment(this.id, this.establishment).subscribe(data => {
      this.goToEstablishmentList();
      this.alertService.success(successMessage, success);
    }, error => {
      this.alertService.erro(errorMessage, errorT);
    });
  }

}
