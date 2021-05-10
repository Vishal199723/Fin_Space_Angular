import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldloandetailsComponent } from './goldloandetails.component';

describe('GoldloandetailsComponent', () => {
  let component: GoldloandetailsComponent;
  let fixture: ComponentFixture<GoldloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
