import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerItComponent } from './computer-it.component';

describe('ComputerItComponent', () => {
  let component: ComputerItComponent;
  let fixture: ComponentFixture<ComputerItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerItComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
