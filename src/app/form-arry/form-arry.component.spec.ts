import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArryComponent } from './form-arry.component';

describe('FormArryComponent', () => {
  let component: FormArryComponent;
  let fixture: ComponentFixture<FormArryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
