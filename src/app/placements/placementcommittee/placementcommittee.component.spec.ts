import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementcommitteeComponent } from './placementcommittee.component';

describe('PlacementcommitteeComponent', () => {
  let component: PlacementcommitteeComponent;
  let fixture: ComponentFixture<PlacementcommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementcommitteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementcommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
