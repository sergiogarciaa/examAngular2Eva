import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosDetailComponent } from './candidatos-detail.component';

describe('CandidatosDetailComponent', () => {
  let component: CandidatosDetailComponent;
  let fixture: ComponentFixture<CandidatosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatosDetailComponent]
    });
    fixture = TestBed.createComponent(CandidatosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
