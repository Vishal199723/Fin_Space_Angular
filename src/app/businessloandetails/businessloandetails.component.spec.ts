import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessloandetailsComponent } from './businessloandetails.component';

describe('BusinessloandetailsComponent', () => {
  let component: BusinessloandetailsComponent;
  let fixture: ComponentFixture<BusinessloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
