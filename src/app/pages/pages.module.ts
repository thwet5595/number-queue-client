import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './login-page/login-page.module';
import { ShowQueueModule } from './show-queue/show-queue.module';

@NgModule({
  imports: [
    CommonModule,
    LoginPageModule,
    ShowQueueModule
  ]
})
export class PagesModule { }
