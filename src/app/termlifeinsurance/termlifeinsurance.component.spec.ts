import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermlifeinsuranceComponent } from './termlifeinsurance.component';

describe('TermlifeinsuranceComponent', () => {
  let component: TermlifeinsuranceComponent;
  let fixture: ComponentFixture<TermlifeinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermlifeinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermlifeinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
