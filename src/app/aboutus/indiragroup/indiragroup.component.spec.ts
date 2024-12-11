import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiragroupComponent } from './indiragroup.component';

describe('IndiragroupComponent', () => {
  let component: IndiragroupComponent;
  let fixture: ComponentFixture<IndiragroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiragroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndiragroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
