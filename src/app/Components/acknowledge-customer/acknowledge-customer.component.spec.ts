import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgeCustomerComponent } from './acknowledge-customer.component';

describe('AcknowledgeCustomerComponent', () => {
  let component: AcknowledgeCustomerComponent;
  let fixture: ComponentFixture<AcknowledgeCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcknowledgeCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
