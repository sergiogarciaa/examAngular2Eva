import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistasListComponent } from './entrevistas-list.component';

describe('EntrevistasListComponent', () => {
  let component: EntrevistasListComponent;
  let fixture: ComponentFixture<EntrevistasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrevistasListComponent]
    });
    fixture = TestBed.createComponent(EntrevistasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
