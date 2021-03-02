import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFrameComponent } from './calc-frame.component';

describe('CalcFrameComponent', () => {
  let component: CalcFrameComponent;
  let fixture: ComponentFixture<CalcFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
