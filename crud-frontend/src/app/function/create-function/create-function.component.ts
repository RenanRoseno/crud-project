import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts.service';
import { FunctionE } from '../../models/function';
import { FunctionService } from '../../services/function.service';
import { faPlus, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { errorMessage, errorT, success, successMessage } from 'src/app/utils/constants';

@Component({
  selector: 'app-create-function',
  templateUrl: './create-function.component.html',
  styleUrls: ['./create-function.component.css']
})
export class CreateFunctionComponent implements OnInit {
  function1 : FunctionE = new FunctionE;

  // ICONS
  faPlus = faPlus;
  faList = faList;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private alertService: AlertsService,
    private functionService : FunctionService) { }

  ngOnInit(): void {
  }

  //------ CREATE FUNCTION
  saveFunction(){
    this.functionService.createFunction(this.function1).subscribe( data => {
      this.alertService.success(successMessage, success);
    }, error => {
      this.alertService.erro(errorMessage, errorT);
    })
  }

  //------ BUTTON ACTION
  onSubmit(){
    this.saveFunction();
    
  }

}
