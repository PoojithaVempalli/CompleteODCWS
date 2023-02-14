import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwashersComponent } from './viewwashers.component';

describe('ViewwashersComponent', () => {
  let component: ViewwashersComponent;
  let fixture: ComponentFixture<ViewwashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewwashersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
