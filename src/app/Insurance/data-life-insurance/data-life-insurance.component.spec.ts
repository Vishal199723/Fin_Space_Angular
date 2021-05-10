import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLifeInsuranceComponent } from './data-life-insurance.component';

describe('DataLifeInsuranceComponent', () => {
  let component: DataLifeInsuranceComponent;
  let fixture: ComponentFixture<DataLifeInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLifeInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLifeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
