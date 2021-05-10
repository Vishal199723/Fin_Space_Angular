import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositLoanDetailsComponent } from './fixed-deposit-loan-details.component';

describe('FixedDepositLoanDetailsComponent', () => {
  let component: FixedDepositLoanDetailsComponent;
  let fixture: ComponentFixture<FixedDepositLoanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedDepositLoanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
