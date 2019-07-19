import { TestBed } from '@angular/core/testing';

import { ElementEventSubscriberService } from './element-event-subscriber.service';

describe('ElementEventSubscriberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementEventSubscriberService = TestBed.get(ElementEventSubscriberService);
    expect(service).toBeTruthy();
  });
});
