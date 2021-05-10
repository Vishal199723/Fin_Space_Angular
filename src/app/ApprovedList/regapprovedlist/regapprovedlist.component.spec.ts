import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegapprovedlistComponent } from './regapprovedlist.component';

describe('RegapprovedlistComponent', () => {
  let component: RegapprovedlistComponent;
  let fixture: ComponentFixture<RegapprovedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegapprovedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegapprovedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
