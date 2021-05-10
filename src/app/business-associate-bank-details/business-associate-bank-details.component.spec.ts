import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAssociateBankDetailsComponent } from './business-associate-bank-details.component';

describe('BusinessAssociateBankDetailsComponent', () => {
  let component: BusinessAssociateBankDetailsComponent;
  let fixture: ComponentFixture<BusinessAssociateBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAssociateBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAssociateBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
