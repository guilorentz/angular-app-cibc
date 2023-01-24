import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonCardComponent } from './radio-button-card.component';

describe('RadioButtonCardComponent', () => {
  let component: RadioButtonCardComponent;
  let fixture: ComponentFixture<RadioButtonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
