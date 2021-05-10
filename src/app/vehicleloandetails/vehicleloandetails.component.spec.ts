import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleloandetailsComponent } from './vehicleloandetails.component';

describe('VehicleloandetailsComponent', () => {
  let component: VehicleloandetailsComponent;
  let fixture: ComponentFixture<VehicleloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
