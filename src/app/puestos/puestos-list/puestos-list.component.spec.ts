import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosListComponent } from './puestos-list.component';

describe('PuestosListComponent', () => {
  let component: PuestosListComponent;
  let fixture: ComponentFixture<PuestosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestosListComponent]
    });
    fixture = TestBed.createComponent(PuestosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
