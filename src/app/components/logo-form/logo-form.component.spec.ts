import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFormComponent } from './logo-form.component';

describe('LogoFormComponent', () => {
  let component: LogoFormComponent;
  let fixture: ComponentFixture<LogoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
