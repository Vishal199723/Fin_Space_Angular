import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisApprovedlistComponent } from './loan-dis-approvedlist.component';

describe('LoanDisApprovedlistComponent', () => {
  let component: LoanDisApprovedlistComponent;
  let fixture: ComponentFixture<LoanDisApprovedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDisApprovedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDisApprovedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
