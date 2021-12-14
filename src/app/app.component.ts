import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from './common/services/current-user-servie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'number-queue-client';
  name: string;
  displayRole: string;
  email: string;
  dateTime = new Date();
  @ViewChild('drawer') drawer: any;
  constructor(private router: Router, private currentUser: CurrentUserService) {

  }

  ngOnInit() {
    this.name = this.currentUser.getName();
    this.email = this.currentUser.getEmail();
  }

  toggleSideNav() {
    //this.drawer.toggle();
    console.log("Login");
  }
  logout() {
    this.router.navigateByUrl('/login');
  }

  isFirstLogin() {
    return this.currentUser.isFirstLogin();
  }

  isLogged() {
    return this.currentUser.isLogged();
  }

  hideMenu() {
    if (!this.currentUser.isLogged()) {
      //return this.drawer.close();
    }
  }

}
