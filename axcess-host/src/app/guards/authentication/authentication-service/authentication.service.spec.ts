import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AxcessShellComponent } from 'src/app/core/components/axcess-shell/axcess-shell.component';
import { AppLinksModule } from 'src/app/core/app-links/app-links.module';
import { ElementLoaderService } from 'src/app/core/services/element-loader/element-loader.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AxcessShellComponent],
    imports: [
      CommonModule,
      RouterModule,
      AppLinksModule
    ],
    providers: [ElementLoaderService,CookieService]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
