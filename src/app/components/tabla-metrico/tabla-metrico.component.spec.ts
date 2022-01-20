import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMetricoComponent } from './tabla-metrico.component';

describe('TablaMetricoComponent', () => {
  let component: TablaMetricoComponent;
  let fixture: ComponentFixture<TablaMetricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMetricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMetricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
