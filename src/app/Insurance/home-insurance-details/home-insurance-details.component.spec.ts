import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsuranceDetailsComponent } from './home-insurance-details.component';

describe('HomeInsuranceDetailsComponent', () => {
  let component: HomeInsuranceDetailsComponent;
  let fixture: ComponentFixture<HomeInsuranceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInsuranceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInsuranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
