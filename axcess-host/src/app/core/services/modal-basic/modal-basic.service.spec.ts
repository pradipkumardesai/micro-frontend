import { TestBed } from '@angular/core/testing';

import { ModalBasicService } from './modal-basic.service';

describe('ModalBasicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalBasicService = TestBed.get(ModalBasicService);
    expect(service).toBeTruthy();
  });
});
