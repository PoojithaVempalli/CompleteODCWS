import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPacksComponent } from './admin-packs.component';

describe('AdminPacksComponent', () => {
  let component: AdminPacksComponent;
  let fixture: ComponentFixture<AdminPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
