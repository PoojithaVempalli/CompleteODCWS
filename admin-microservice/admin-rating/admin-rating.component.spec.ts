import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRatingComponent } from './admin-rating.component';

describe('AdminRatingComponent', () => {
  let component: AdminRatingComponent;
  let fixture: ComponentFixture<AdminRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
