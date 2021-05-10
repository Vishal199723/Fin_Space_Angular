import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMemberMasterComponent } from './group-member-master.component';

describe('GroupMemberMasterComponent', () => {
  let component: GroupMemberMasterComponent;
  let fixture: ComponentFixture<GroupMemberMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMemberMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMemberMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
