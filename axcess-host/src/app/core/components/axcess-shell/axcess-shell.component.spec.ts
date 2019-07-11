import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxcessShellComponent } from './axcess-shell.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLinksModule } from '../../app-links/app-links.module';
import { ElementLoaderService } from '../../services/element-loader/element-loader.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';


describe('AxcessShellComponent', () => {
  let component: AxcessShellComponent;
  let fixture: ComponentFixture<AxcessShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AxcessShellComponent],
      imports: [
        CommonModule,
        RouterModule.forRoot([]),
        AppLinksModule,
        HttpClientModule
      ],
      providers: [ElementLoaderService,CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxcessShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
