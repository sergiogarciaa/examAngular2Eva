import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistasDetailComponent } from './entrevistas-detail.component';

describe('EntrevistasDetailComponent', () => {
  let component: EntrevistasDetailComponent;
  let fixture: ComponentFixture<EntrevistasDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrevistasDetailComponent]
    });
    fixture = TestBed.createComponent(EntrevistasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
