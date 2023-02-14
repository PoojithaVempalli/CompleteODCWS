import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpacksComponent } from './viewpacks.component';

describe('ViewpacksComponent', () => {
  let component: ViewpacksComponent;
  let fixture: ComponentFixture<ViewpacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
