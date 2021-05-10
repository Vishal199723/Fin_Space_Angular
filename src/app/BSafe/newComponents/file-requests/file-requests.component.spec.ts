import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRequestsComponent } from './file-requests.component';

describe('FileRequestsComponent', () => {
  let component: FileRequestsComponent;
  let fixture: ComponentFixture<FileRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
