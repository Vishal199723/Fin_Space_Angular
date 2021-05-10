import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectloandetailsComponent } from './projectloandetails.component';

describe('ProjectloandetailsComponent', () => {
  let component: ProjectloandetailsComponent;
  let fixture: ComponentFixture<ProjectloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
