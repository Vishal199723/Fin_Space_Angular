import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowmasterComponent } from './workflowmaster.component';

describe('WorkflowmasterComponent', () => {
  let component: WorkflowmasterComponent;
  let fixture: ComponentFixture<WorkflowmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
