import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionmasterComponent } from './commissionmaster.component';

describe('CommissionmasterComponent', () => {
  let component: CommissionmasterComponent;
  let fixture: ComponentFixture<CommissionmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
