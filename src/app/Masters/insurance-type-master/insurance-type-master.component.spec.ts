import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTypeMasterComponent } from './insurance-type-master.component';

describe('InsuranceTypeMasterComponent', () => {
  let component: InsuranceTypeMasterComponent;
  let fixture: ComponentFixture<InsuranceTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
