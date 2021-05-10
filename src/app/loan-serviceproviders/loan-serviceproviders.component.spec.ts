import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanServiceprovidersComponent } from './loan-serviceproviders.component';

describe('LoanServiceprovidersComponent', () => {
  let component: LoanServiceprovidersComponent;
  let fixture: ComponentFixture<LoanServiceprovidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanServiceprovidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanServiceprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
