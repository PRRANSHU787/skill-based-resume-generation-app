import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderFormComponent } from './calender-form.component';

describe('CalenderFormComponent', () => {
  let component: CalenderFormComponent;
  let fixture: ComponentFixture<CalenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
