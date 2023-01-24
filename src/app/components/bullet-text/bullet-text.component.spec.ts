import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletTextComponent } from './bullet-text.component';

describe('BulletTextComponent', () => {
  let component: BulletTextComponent;
  let fixture: ComponentFixture<BulletTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulletTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
