import { TestBed } from '@angular/core/testing';

import { ElementEventPublisherService } from './element-event-publisher.service';

describe('ElementEventPublisherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementEventPublisherService = TestBed.get(ElementEventPublisherService);
    expect(service).toBeTruthy();
  });
});
