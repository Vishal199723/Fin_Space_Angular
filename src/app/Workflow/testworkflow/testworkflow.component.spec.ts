import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestworkflowComponent } from './testworkflow.component';

describe('TestworkflowComponent', () => {
  let component: TestworkflowComponent;
  let fixture: ComponentFixture<TestworkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestworkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
