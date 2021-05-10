import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentInsuranceDetailsComponent } from './accident-insurance-details.component';

describe('AccidentInsuranceDetailsComponent', () => {
  let component: AccidentInsuranceDetailsComponent;
  let fixture: ComponentFixture<AccidentInsuranceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentInsuranceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentInsuranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
