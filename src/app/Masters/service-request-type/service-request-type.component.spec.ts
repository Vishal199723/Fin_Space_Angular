import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestTypeComponent } from './service-request-type.component';

describe('ServiceRequestTypeComponent', () => {
  let component: ServiceRequestTypeComponent;
  let fixture: ComponentFixture<ServiceRequestTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRequestTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRequestTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
