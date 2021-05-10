import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedassetloandetailsComponent } from './fixedassetloandetails.component';

describe('FixedassetloandetailsComponent', () => {
  let component: FixedassetloandetailsComponent;
  let fixture: ComponentFixture<FixedassetloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedassetloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedassetloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
