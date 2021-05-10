import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSriMeetingComponent } from './new-sri-meeting.component';

describe('NewSriMeetingComponent', () => {
  let component: NewSriMeetingComponent;
  let fixture: ComponentFixture<NewSriMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSriMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSriMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
