import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCardComponent } from './link-card.component';
import { AppLinksComponent } from '../app-links/app-links.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('LinkCardComponent', () => {
  let component: LinkCardComponent;
  let fixture: ComponentFixture<LinkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLinksComponent, LinkCardComponent],
      imports: [
        CommonModule,
        RouterModule.forRoot([]),
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkCardComponent);
    component = fixture.componentInstance;
    component.linkGroup = {
      appLinks:["abc"]
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
