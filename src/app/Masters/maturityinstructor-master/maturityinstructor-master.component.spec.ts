import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturityinstructorMasterComponent } from './maturityinstructor-master.component';

describe('MaturityinstructorMasterComponent', () => {
  let component: MaturityinstructorMasterComponent;
  let fixture: ComponentFixture<MaturityinstructorMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaturityinstructorMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturityinstructorMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
