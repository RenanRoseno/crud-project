import { Component } from '@angular/core';
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { faExchangeAlt, faStoreAlt, faPlus, faList} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-frontend';
  faUser = faUser;
  faExchange = faExchangeAlt;
  faStore = faStoreAlt;
  faPlus = faPlus;
  faList = faList;
}
