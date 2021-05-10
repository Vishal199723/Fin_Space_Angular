import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BADetailsComponent } from './badetails.component';

describe('BADetailsComponent', () => {
  let component: BADetailsComponent;
  let fixture: ComponentFixture<BADetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BADetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BADetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
