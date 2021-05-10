import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedfilesComponent } from './deletedfiles.component';

describe('DeletedfilesComponent', () => {
  let component: DeletedfilesComponent;
  let fixture: ComponentFixture<DeletedfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
