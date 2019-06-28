import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxcessShellComponent } from './axcess-shell.component';

describe('AxcessShellComponent', () => {
  let component: AxcessShellComponent;
  let fixture: ComponentFixture<AxcessShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxcessShellComponent ]
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
