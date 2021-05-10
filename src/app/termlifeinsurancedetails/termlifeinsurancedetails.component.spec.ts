import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermlifeinsurancedetailsComponent } from './termlifeinsurancedetails.component';

describe('TermlifeinsurancedetailsComponent', () => {
  let component: TermlifeinsurancedetailsComponent;
  let fixture: ComponentFixture<TermlifeinsurancedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermlifeinsurancedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermlifeinsurancedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
