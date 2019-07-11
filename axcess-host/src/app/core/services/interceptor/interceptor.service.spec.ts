import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AxcessShellComponent } from '../../components/axcess-shell/axcess-shell.component';
import { AppLinksModule } from '../../app-links/app-links.module';
import { ElementLoaderService } from '../element-loader/element-loader.service';
import { CookieService } from 'ngx-cookie-service';


describe('InterceptorService', () => {
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
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });
});
