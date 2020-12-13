import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Establishment } from '../establishment';
import { EstablishmentService } from '../establishment.service';

@Component({
  selector: 'app-update-establishment',
  templateUrl: './update-establishment.component.html',
  styleUrls: ['./update-establishment.component.css']
})
export class UpdateEstablishmentComponent implements OnInit {
  phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/,];

  id: number;
  establishment: Establishment = new Establishment();

  constructor(private establishmentService: EstablishmentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.establishmentService.getEstablishmentById(this.id).subscribe(data => {
      this.establishment = data;
    }, error => console.log(error));
  }

  goToEstablishmentList() {
    this.router.navigate(['/estabelecimentos']);
  }

  onSubmit() {
    this.establishmentService.updateEstablishment(this.id, this.establishment).subscribe(data => {
      this.goToEstablishmentList();
    }, error => console.log(error));
  }

}
