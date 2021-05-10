import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbacountComponent } from './sbacount.component';

describe('SbacountComponent', () => {
  let component: SbacountComponent;
  let fixture: ComponentFixture<SbacountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbacountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbacountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
