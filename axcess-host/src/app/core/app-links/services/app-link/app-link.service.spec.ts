import { TestBed } from '@angular/core/testing';

import { AppLinkService } from './app-link.service';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppLinksComponent } from '../../components/app-links/app-links.component';
import { LinkCardComponent } from '../../components/link-card/link-card.component';

describe('AppLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppLinksComponent, LinkCardComponent],
    imports: [
      CommonModule,
      RouterModule.forRoot([]),
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: AppLinkService = TestBed.get(AppLinkService);
    expect(service).toBeTruthy();
  });
});
