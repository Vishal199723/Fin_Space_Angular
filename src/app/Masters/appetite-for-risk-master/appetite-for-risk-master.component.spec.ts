import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppetiteForRiskMasterComponent } from './appetite-for-risk-master.component';

describe('AppetiteForRiskMasterComponent', () => {
  let component: AppetiteForRiskMasterComponent;
  let fixture: ComponentFixture<AppetiteForRiskMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppetiteForRiskMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppetiteForRiskMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
