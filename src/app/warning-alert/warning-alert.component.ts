import { Component } from '@angular/core';

@Component({
  selector: 'warning-alert',
  templateUrl: './warning-alert.component.html',
  //styleUrls: ['./warning-alert.component.css']
  styles: [`
    p {
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
      border-radius: 25px;
    }
  `],
})
export class WarningAlertComponent {

}
