import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRehabilitationComponent } from './medical-rehabilitation.component';

describe('MedicalRehabilitationComponent', () => {
  let component: MedicalRehabilitationComponent;
  let fixture: ComponentFixture<MedicalRehabilitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalRehabilitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRehabilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
