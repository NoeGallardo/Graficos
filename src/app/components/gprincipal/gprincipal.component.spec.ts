import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GprincipalComponent } from './gprincipal.component';

describe('GprincipalComponent', () => {
  let component: GprincipalComponent;
  let fixture: ComponentFixture<GprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
