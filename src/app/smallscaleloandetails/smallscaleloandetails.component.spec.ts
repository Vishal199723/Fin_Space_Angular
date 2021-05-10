import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallscaleloandetailsComponent } from './smallscaleloandetails.component';

describe('SmallscaleloandetailsComponent', () => {
  let component: SmallscaleloandetailsComponent;
  let fixture: ComponentFixture<SmallscaleloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallscaleloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallscaleloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
