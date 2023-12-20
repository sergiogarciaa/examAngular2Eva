import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosDetailComponent } from './puestos-detail.component';

describe('PuestosDetailComponent', () => {
  let component: PuestosDetailComponent;
  let fixture: ComponentFixture<PuestosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestosDetailComponent]
    });
    fixture = TestBed.createComponent(PuestosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
