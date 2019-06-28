import { TestBed } from '@angular/core/testing';

import { AppsConfigService } from './apps-config.service';

describe('AppsConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppsConfigService = TestBed.get(AppsConfigService);
    expect(service).toBeTruthy();
  });
});
