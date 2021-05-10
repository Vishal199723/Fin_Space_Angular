import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdashboarddetailsComponent } from './customerdashboarddetails.component';

describe('CustomerdashboarddetailsComponent', () => {
  let component: CustomerdashboarddetailsComponent;
  let fixture: ComponentFixture<CustomerdashboarddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdashboarddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdashboarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
