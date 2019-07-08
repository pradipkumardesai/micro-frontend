import { TestBed } from '@angular/core/testing';

import { ShellConfigService } from './shell-config.service';

describe('ShellConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShellConfigService = TestBed.get(ShellConfigService);
    expect(service).toBeTruthy();
  });
});
