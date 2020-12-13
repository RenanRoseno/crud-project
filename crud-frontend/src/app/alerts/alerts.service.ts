import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  private showAlert(title: string, message: string, icon: SweetAlertIcon): void {
    Swal.fire(title, message, icon);
  }

  public showConfirmDelete() : any{
    Swal.fire({
      title: 'Deseja realmente excluir?',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else if (result.isDenied) {
        return 0;
      }else{
        return 0;
      }
    });
  }

  public success(message: string, title: string): void {
    this.showAlert(title, message, 'success');
  }

  public info(message: string, title: string): void {
    this.showAlert(title, message, 'info');
  }

  public erro(message: string, title: string): void {
    this.showAlert(title, message, 'error');
  }


}
