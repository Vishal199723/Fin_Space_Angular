import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountTypeMasterComponent } from './bank-account-type-master.component';

describe('BankAccountTypeMasterComponent', () => {
  let component: BankAccountTypeMasterComponent;
  let fixture: ComponentFixture<BankAccountTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
