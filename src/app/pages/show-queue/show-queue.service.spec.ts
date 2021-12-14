import { TestBed, inject } from '@angular/core/testing';

import { ShowQueueService } from './show-queue.service';

describe('ShowQueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowQueueService]
    });
  });

  it('should be created', inject([ShowQueueService], (service: ShowQueueService) => {
    expect(service).toBeTruthy();
  }));
});
