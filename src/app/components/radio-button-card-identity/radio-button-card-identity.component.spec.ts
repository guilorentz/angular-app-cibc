import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonCardIdentityComponent } from './radio-button-card-identity.component';

describe('RadioButtonCardIdentityComponent', () => {
  let component: RadioButtonCardIdentityComponent;
  let fixture: ComponentFixture<RadioButtonCardIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonCardIdentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonCardIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
