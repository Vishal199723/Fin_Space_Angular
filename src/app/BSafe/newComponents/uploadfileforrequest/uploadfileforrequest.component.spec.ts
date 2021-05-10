import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfileforrequestComponent } from './uploadfileforrequest.component';

describe('UploadfileforrequestComponent', () => {
  let component: UploadfileforrequestComponent;
  let fixture: ComponentFixture<UploadfileforrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadfileforrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadfileforrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
