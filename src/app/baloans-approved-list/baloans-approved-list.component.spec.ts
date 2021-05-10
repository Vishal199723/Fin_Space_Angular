import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BALoansApprovedListComponent } from './baloans-approved-list.component';

describe('BALoansApprovedListComponent', () => {
  let component: BALoansApprovedListComponent;
  let fixture: ComponentFixture<BALoansApprovedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BALoansApprovedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BALoansApprovedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
