import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderMasterComponent } from './gender-master.component';

describe('GenderMasterComponent', () => {
  let component: GenderMasterComponent;
  let fixture: ComponentFixture<GenderMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
