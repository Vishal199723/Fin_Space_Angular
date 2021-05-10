import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharefileComponent } from './sharefile.component';

describe('SharefileComponent', () => {
  let component: SharefileComponent;
  let fixture: ComponentFixture<SharefileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharefileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
