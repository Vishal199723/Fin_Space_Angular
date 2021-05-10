import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorkSpanMasterComponent } from './project-work-span-master.component';

describe('ProjectWorkSpanMasterComponent', () => {
  let component: ProjectWorkSpanMasterComponent;
  let fixture: ComponentFixture<ProjectWorkSpanMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWorkSpanMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWorkSpanMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
