import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualStoriesModalComponent } from './visual-stories-modal.component';

describe('VisualStoriesModalComponent', () => {
  let component: VisualStoriesModalComponent;
  let fixture: ComponentFixture<VisualStoriesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualStoriesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualStoriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
