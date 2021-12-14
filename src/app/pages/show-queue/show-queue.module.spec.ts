import { ShowQueueModule } from './show-queue.module';

describe('ShowQueueModule', () => {
  let showQueueModule: ShowQueueModule;

  beforeEach(() => {
    showQueueModule = new ShowQueueModule();
  });

  it('should create an instance', () => {
    expect(showQueueModule).toBeTruthy();
  });
});
