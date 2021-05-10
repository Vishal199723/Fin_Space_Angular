import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovableassetMasterComponent } from './movableasset-master.component';

describe('MovableassetMasterComponent', () => {
  let component: MovableassetMasterComponent;
  let fixture: ComponentFixture<MovableassetMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovableassetMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableassetMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
