import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //Como elemento: <app-servers></app-servers>
  //selector: '[app-servers]', //Como propriedade: <div app-servers></div>
  //selector: '.app-servers', // Como classe: <div class="app-servers"></div>
  
  //if the code is small, you can write it here like this
  template: `
  <app-server></app-server>
  <app-server></app-server>`, 
  //template: '<app-server></app-server><app-server></app-server>',
  //otherwise, just use the html file
  //templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
