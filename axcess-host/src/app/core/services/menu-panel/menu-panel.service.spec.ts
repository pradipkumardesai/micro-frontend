import { TestBed } from '@angular/core/testing';

import { MenuPanelService } from './menu-panel.service';

describe('MenuPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuPanelService = TestBed.get(MenuPanelService);
    expect(service).toBeTruthy();
  });
});
