import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSlideComponent } from './modal-slide.component';

describe('ModalSlideComponent', () => {
  let component: ModalSlideComponent;
  let fixture: ComponentFixture<ModalSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
