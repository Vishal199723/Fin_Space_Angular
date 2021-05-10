import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboarddetailsComponent } from './admindashboarddetails.component';

describe('AdmindashboarddetailsComponent', () => {
  let component: AdmindashboarddetailsComponent;
  let fixture: ComponentFixture<AdmindashboarddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindashboarddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashboarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
