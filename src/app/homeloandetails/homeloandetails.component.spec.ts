import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloandetailsComponent } from './homeloandetails.component';

describe('HomeloandetailsComponent', () => {
  let component: HomeloandetailsComponent;
  let fixture: ComponentFixture<HomeloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
