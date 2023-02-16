import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientClinicsComponent } from './outpatient-clinics.component';

describe('OutpatientClinicsComponent', () => {
  let component: OutpatientClinicsComponent;
  let fixture: ComponentFixture<OutpatientClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpatientClinicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpatientClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
