import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisburseLoanComponent } from './disburse-loan.component';

describe('DisburseLoanComponent', () => {
  let component: DisburseLoanComponent;
  let fixture: ComponentFixture<DisburseLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisburseLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisburseLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
