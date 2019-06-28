import { TestBed } from '@angular/core/testing';

import { ElementLoaderService } from './element-loader.service';

describe('ElementLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementLoaderService = TestBed.get(ElementLoaderService);
    expect(service).toBeTruthy();
  });
});
