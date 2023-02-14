import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherRegistrationComponent } from './washer-registration.component';

describe('WasherRegistrationComponent', () => {
  let component: WasherRegistrationComponent;
  let fixture: ComponentFixture<WasherRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
