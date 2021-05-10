import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorInsuranceDetailsComponent } from './motor-insurance-details.component';

describe('MotorInsuranceDetailsComponent', () => {
  let component: MotorInsuranceDetailsComponent;
  let fixture: ComponentFixture<MotorInsuranceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorInsuranceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorInsuranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
