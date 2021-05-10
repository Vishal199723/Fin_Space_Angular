import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderProductsMasterComponent } from './service-provider-products-master.component';

describe('ServiceProviderProductsMasterComponent', () => {
  let component: ServiceProviderProductsMasterComponent;
  let fixture: ComponentFixture<ServiceProviderProductsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderProductsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderProductsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
