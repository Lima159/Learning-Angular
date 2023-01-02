import { Component } from '@angular/core';

@Component({
  selector: 'success-alert',
  templateUrl: './success-alert.component.html',
  //styleUrls: ['./success-alert.component.css']
  styles: [`
    p {
      padding: 20px;
      background-color: palegreen;
      border: 1px solid green;
      border-radius: 25px;
    }
  `],
})
export class SuccessAlertComponent {

}
