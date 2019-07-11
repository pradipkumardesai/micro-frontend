import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLinksComponent } from './app-links.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkCardComponent } from '../link-card/link-card.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppLinksComponent', () => {
  let component: AppLinksComponent;
  let fixture: ComponentFixture<AppLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLinksComponent, LinkCardComponent],
      imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
