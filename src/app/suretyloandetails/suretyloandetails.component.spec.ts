import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuretyloandetailsComponent } from './suretyloandetails.component';

describe('SuretyloandetailsComponent', () => {
  let component: SuretyloandetailsComponent;
  let fixture: ComponentFixture<SuretyloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuretyloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuretyloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
