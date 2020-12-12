import { Component, OnInit } from '@angular/core';
import { Establishment } from '../establishment';
@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.css']
})
export class EstablishmentListComponent implements OnInit {

  establishments: Establishment[];
  constructor() { }

  ngOnInit(): void {
  }

}
