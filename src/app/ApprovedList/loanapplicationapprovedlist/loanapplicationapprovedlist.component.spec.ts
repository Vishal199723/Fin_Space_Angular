import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanapplicationapprovedlistComponent } from './loanapplicationapprovedlist.component';

describe('LoanapplicationapprovedlistComponent', () => {
  let component: LoanapplicationapprovedlistComponent;
  let fixture: ComponentFixture<LoanapplicationapprovedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanapplicationapprovedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanapplicationapprovedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
