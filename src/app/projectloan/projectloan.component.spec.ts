import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectloanComponent } from './projectloan.component';

describe('ProjectloanComponent', () => {
  let component: ProjectloanComponent;
  let fixture: ComponentFixture<ProjectloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
