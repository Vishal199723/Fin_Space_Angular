import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionedLoansComponent } from './sanctioned-loans.component';

describe('SanctionedLoansComponent', () => {
  let component: SanctionedLoansComponent;
  let fixture: ComponentFixture<SanctionedLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionedLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
