import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementMasterComponent } from './disbursement-master.component';

describe('DisbursementMasterComponent', () => {
  let component: DisbursementMasterComponent;
  let fixture: ComponentFixture<DisbursementMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisbursementMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursementMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
