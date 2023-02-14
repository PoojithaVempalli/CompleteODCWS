import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWasherComponent } from './admin-washer.component';

describe('AdminWasherComponent', () => {
  let component: AdminWasherComponent;
  let fixture: ComponentFixture<AdminWasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWasherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
