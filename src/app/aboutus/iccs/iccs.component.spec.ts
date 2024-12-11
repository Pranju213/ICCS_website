import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IccsComponent } from './iccs.component';

describe('IccsComponent', () => {
  let component: IccsComponent;
  let fixture: ComponentFixture<IccsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IccsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IccsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
