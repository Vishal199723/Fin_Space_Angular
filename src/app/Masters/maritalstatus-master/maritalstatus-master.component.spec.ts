import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalstatusMasterComponent } from './maritalstatus-master.component';

describe('MaritalstatusMasterComponent', () => {
  let component: MaritalstatusMasterComponent;
  let fixture: ComponentFixture<MaritalstatusMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaritalstatusMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalstatusMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
