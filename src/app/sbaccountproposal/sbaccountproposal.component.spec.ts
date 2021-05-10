import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbaccountproposalComponent } from './sbaccountproposal.component';

describe('SbaccountproposalComponent', () => {
  let component: SbaccountproposalComponent;
  let fixture: ComponentFixture<SbaccountproposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbaccountproposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbaccountproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
