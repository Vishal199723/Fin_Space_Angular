import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedassetloanComponent } from './fixedassetloan.component';

describe('FixedassetloanComponent', () => {
  let component: FixedassetloanComponent;
  let fixture: ComponentFixture<FixedassetloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedassetloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedassetloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
