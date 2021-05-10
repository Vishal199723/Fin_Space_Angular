import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAssociateDashBoardComponent } from './business-associate-dash-board.component';

describe('BusinessAssociateDashBoardComponent', () => {
  let component: BusinessAssociateDashBoardComponent;
  let fixture: ComponentFixture<BusinessAssociateDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAssociateDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAssociateDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
