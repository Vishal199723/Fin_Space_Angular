import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoantypeMasterComponent } from './loantype-master.component';

describe('LoantypeMasterComponent', () => {
  let component: LoantypeMasterComponent;
  let fixture: ComponentFixture<LoantypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoantypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoantypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
