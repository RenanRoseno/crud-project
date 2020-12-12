import { Component, OnInit } from '@angular/core';
import { Establishment } from '../establishment';
import { EstablishmentService } from '../establishment.service';
@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.css']
})
export class EstablishmentListComponent implements OnInit {

  establishments: Establishment[];
  constructor(private establishmentService : EstablishmentService) { }

  ngOnInit(): void {
    this.getEstablishment();
  }

  private getEstablishment(){
    this.establishmentService.getEstablishmentList().subscribe(data => {
        this.establishments = data;
    })
  }
}
