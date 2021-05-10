import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPDetailsComponent } from './spdetails.component';

describe('SPDetailsComponent', () => {
  let component: SPDetailsComponent;
  let fixture: ComponentFixture<SPDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
