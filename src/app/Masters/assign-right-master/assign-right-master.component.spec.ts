import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRightMasterComponent } from './assign-right-master.component';

describe('AssignRightMasterComponent', () => {
  let component: AssignRightMasterComponent;
  let fixture: ComponentFixture<AssignRightMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRightMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRightMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
