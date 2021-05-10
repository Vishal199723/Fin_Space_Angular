import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersetPayoutMasterComponent } from './interset-payout-master.component';

describe('IntersetPayoutMasterComponent', () => {
  let component: IntersetPayoutMasterComponent;
  let fixture: ComponentFixture<IntersetPayoutMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersetPayoutMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersetPayoutMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
