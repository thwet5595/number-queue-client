import { Component, OnInit } from '@angular/core';
import { ShowQueueService } from './show-queue.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-show-queue',
  templateUrl: './show-queue.component.html',
  styleUrls: ['./show-queue.component.css']
})
export class ShowQueueComponent implements OnInit {

  intervalId : any;
  result: String;

  constructor(private showQueueService: ShowQueueService) { }

  ngOnInit() {
    this.intervalId = setInterval(() => {         
      this.showQueueService.getNumbers()
            .subscribe
            (
            r => {
                if (r instanceof HttpResponse) {
                    const json = <any>r.body;
                    console.log("Result..." + json.result);
                   this.result = json.result;
                }
            }
            );
    }, 5000);
  
  }
  
}
