import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationloanComponent } from './educationloan.component';

describe('EducationloanComponent', () => {
  let component: EducationloanComponent;
  let fixture: ComponentFixture<EducationloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
