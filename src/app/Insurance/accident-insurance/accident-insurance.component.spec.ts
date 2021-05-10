import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentInsuranceComponent } from './accident-insurance.component';

describe('AccidentInsuranceComponent', () => {
  let component: AccidentInsuranceComponent;
  let fixture: ComponentFixture<AccidentInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
