import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationmasterComponent } from './designationmaster.component';

describe('DesignationmasterComponent', () => {
  let component: DesignationmasterComponent;
  let fixture: ComponentFixture<DesignationmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
