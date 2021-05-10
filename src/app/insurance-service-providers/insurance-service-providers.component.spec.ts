import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceServiceProvidersComponent } from './insurance-service-providers.component';

describe('InsuranceServiceProvidersComponent', () => {
  let component: InsuranceServiceProvidersComponent;
  let fixture: ComponentFixture<InsuranceServiceProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceServiceProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
