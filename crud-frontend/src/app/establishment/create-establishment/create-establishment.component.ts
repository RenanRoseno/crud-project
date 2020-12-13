import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Establishment } from '../establishment';
import { EstablishmentService } from '../establishment.service';

@Component({
  selector: 'app-create-establishment',
  templateUrl: './create-establishment.component.html',
  styleUrls: ['./create-establishment.component.css']
})
export class CreateEstablishmentComponent implements OnInit {
  establishment : Establishment = new Establishment();
  phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/,/[0-9]/,/[0-9]/,];
  constructor(private establishmentService: EstablishmentService,
    private router:Router) { }

  ngOnInit(): void {
   
  }

  goToEstablishmentList(){
    this.router.navigate(['/estabelecimentos']);
  }

  saveEstablishment(){
    this.establishmentService.createEstablishment(this.establishment).subscribe(data=>{
      console.log(data);
      this.goToEstablishmentList();
    }, 
    error => console.log(error));
  }

  onSubmit(){
    this.saveEstablishment();
    console.log(this.establishment);
  }
}
