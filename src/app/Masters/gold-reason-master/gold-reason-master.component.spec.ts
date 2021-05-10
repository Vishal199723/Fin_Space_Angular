import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldReasonMasterComponent } from './gold-reason-master.component';

describe('GoldReasonMasterComponent', () => {
  let component: GoldReasonMasterComponent;
  let fixture: ComponentFixture<GoldReasonMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldReasonMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldReasonMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
