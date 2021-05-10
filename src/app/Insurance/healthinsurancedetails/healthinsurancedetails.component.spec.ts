import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthinsurancedetailsComponent } from './healthinsurancedetails.component';

describe('HealthinsurancedetailsComponent', () => {
  let component: HealthinsurancedetailsComponent;
  let fixture: ComponentFixture<HealthinsurancedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthinsurancedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthinsurancedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
