import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundServiceProviderComponent } from './mutual-fund-service-provider.component';

describe('MutualFundServiceProviderComponent', () => {
  let component: MutualFundServiceProviderComponent;
  let fixture: ComponentFixture<MutualFundServiceProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFundServiceProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
