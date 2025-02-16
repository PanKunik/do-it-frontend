import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersComponent } from './timers.component';

describe('TimersComponent', () => {
  let component: TimersComponent;
  let fixture: ComponentFixture<TimersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
