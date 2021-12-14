import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { RouterModule } from '@angular/router';
import { LoginPageService } from './login-page.service';
import { SharedModule } from 'src/app/common/modules/shared.module';

const routes = [
  {
      path: 'login',
      component: LoginPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginPageComponent
  ],
  providers: [
    LoginPageService
      
  ]
})
export class LoginPageModule { }
