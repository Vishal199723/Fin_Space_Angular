import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuretyLoanformComponent } from './surety-loanform.component';

describe('SuretyLoanformComponent', () => {
  let component: SuretyLoanformComponent;
  let fixture: ComponentFixture<SuretyLoanformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuretyLoanformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuretyLoanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
