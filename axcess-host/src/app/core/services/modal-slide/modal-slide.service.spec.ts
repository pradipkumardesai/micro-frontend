import { TestBed } from '@angular/core/testing';

import { ModalSlideService } from './modal-slide.service';

describe('ModalSlideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalSlideService = TestBed.get(ModalSlideService);
    expect(service).toBeTruthy();
  });
});
