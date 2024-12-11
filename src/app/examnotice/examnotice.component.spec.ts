import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamnoticeComponent } from './examnotice.component';

describe('ExamnoticeComponent', () => {
  let component: ExamnoticeComponent;
  let fixture: ComponentFixture<ExamnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamnoticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
