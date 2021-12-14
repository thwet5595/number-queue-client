import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/common/services/current-user-servie';
import { LoginPageService } from './login-page.service';
import { HttpError } from 'src/app/common/constants/http-error';
import { AlertService } from 'src/app/common/services/alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  email: string;
  password: string;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,
     private currentUser : CurrentUserService,private loginPageService: LoginPageService,
     private alertService : AlertService) {

      } 

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() { return this.loginForm.controls; }

  tryLogin() {
    console.log("Login");
    this.router.navigateByUrl('/');
    // Login
    this.loginPageService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
    )
        .subscribe(
            (res: any) => {
              sessionStorage.setItem('ACCESS_TOKEN', res.access_token);
              sessionStorage.setItem('REFRESH_TOKEN', res.refresh_token);
              sessionStorage.setItem('SESSIONID', res.sessionId);
              
              this.alertService.success('Login Success.');
              this.router.navigateByUrl('/show-queue');
            },
            err => {
              this.alertService.error('Login Fail.Please try again!');
            })
  }
}
