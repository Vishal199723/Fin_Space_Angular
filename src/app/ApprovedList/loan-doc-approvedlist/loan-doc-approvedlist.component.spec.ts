import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDocApprovedlistComponent } from './loan-doc-approvedlist.component';

describe('LoanDocApprovedlistComponent', () => {
  let component: LoanDocApprovedlistComponent;
  let fixture: ComponentFixture<LoanDocApprovedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDocApprovedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDocApprovedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
