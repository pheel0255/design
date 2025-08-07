import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design2 } from './design2';

describe('Design2', () => {
  let component: Design2;
  let fixture: ComponentFixture<Design2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Design2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
