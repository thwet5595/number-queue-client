import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ShowQueueComponent } from './show-queue.component';
import { NeedAuthGuard } from 'src/app/common/services/auth.guard';
import { SharedModule } from 'src/app/common/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { ShowQueueService } from './show-queue.service';

const routes = [
  {
      path: 'show-queue',
      component: ShowQueueComponent
  }
];

@NgModule({
  declarations: [
      ShowQueueComponent
  ],
  imports: [
      SharedModule,
      RouterModule.forChild(routes)
  ],
  providers: [
      ShowQueueService,
      DatePipe
  ]
})
export class ShowQueueModule { }
