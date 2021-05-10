import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionNeedMasterComponent } from './protection-need-master.component';

describe('ProtectionNeedMasterComponent', () => {
  let component: ProtectionNeedMasterComponent;
  let fixture: ComponentFixture<ProtectionNeedMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionNeedMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionNeedMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
