import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdashboarddetailsComponent } from './tmdashboarddetails.component';

describe('TmdashboarddetailsComponent', () => {
  let component: TmdashboarddetailsComponent;
  let fixture: ComponentFixture<TmdashboarddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdashboarddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdashboarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
