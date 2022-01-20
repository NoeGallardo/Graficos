import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMetricosComponent } from './modal-metricos.component';

describe('ModalMetricosComponent', () => {
  let component: ModalMetricosComponent;
  let fixture: ComponentFixture<ModalMetricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMetricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMetricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
