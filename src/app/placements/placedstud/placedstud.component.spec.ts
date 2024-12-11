import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedstudComponent } from './placedstud.component';

describe('PlacedstudComponent', () => {
  let component: PlacedstudComponent;
  let fixture: ComponentFixture<PlacedstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacedstudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacedstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
