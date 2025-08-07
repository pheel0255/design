import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design3 } from './design3';

describe('Design3', () => {
  let component: Design3;
  let fixture: ComponentFixture<Design3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Design3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
