import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintouploadfilesComponent } from './logintouploadfiles.component';

describe('LogintouploadfilesComponent', () => {
  let component: LogintouploadfilesComponent;
  let fixture: ComponentFixture<LogintouploadfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintouploadfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintouploadfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
