import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule } from 'ngx-toastr';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { SharedModule } from './common/modules/shared.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    PagesModule,
    HttpClientModule,
    PapaParseModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
