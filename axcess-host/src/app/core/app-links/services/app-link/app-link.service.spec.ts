import { TestBed } from '@angular/core/testing';

import { AppLinkService } from './app-link.service';

describe('AppLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLinkService = TestBed.get(AppLinkService);
    expect(service).toBeTruthy();
  });
});
