import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design1 } from './design1';

describe('Design1', () => {
  let component: Design1;
  let fixture: ComponentFixture<Design1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Design1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
