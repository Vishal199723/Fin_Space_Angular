import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowstatemasterComponent } from './workflowstatemaster.component';

describe('WorkflowstatemasterComponent', () => {
  let component: WorkflowstatemasterComponent;
  let fixture: ComponentFixture<WorkflowstatemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowstatemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowstatemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
