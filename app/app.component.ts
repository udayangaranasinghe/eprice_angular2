import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `    
    <div class="header-bar-1">Welcome Udayanga</div>
    <div class="header-bar-2"><a>HOME PAGE</a>|<a>CUSTOMER PROFILE</a></div>
    <img src="./app/images/logo.png"/>    
  `,
  styleUrls: ['./app/app.component.css']
})
 
export class AppComponent { }