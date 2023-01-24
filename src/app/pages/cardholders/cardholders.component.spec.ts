import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardholdersComponent } from './cardholders.component';

describe('CardholdersComponent', () => {
  let component: CardholdersComponent;
  let fixture: ComponentFixture<CardholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardholdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
