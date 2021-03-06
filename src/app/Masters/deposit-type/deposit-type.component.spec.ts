import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositTypeComponent } from './deposit-type.component';

describe('DepositTypeComponent', () => {
  let component: DepositTypeComponent;
  let fixture: ComponentFixture<DepositTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
