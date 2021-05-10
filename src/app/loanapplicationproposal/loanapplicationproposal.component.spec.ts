import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanapplicationproposalComponent } from './loanapplicationproposal.component';

describe('LoanapplicationproposalComponent', () => {
  let component: LoanapplicationproposalComponent;
  let fixture: ComponentFixture<LoanapplicationproposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanapplicationproposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanapplicationproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
