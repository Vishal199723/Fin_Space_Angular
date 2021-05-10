import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumnetviewComponent } from './documnetview.component';

describe('DocumnetviewComponent', () => {
  let component: DocumnetviewComponent;
  let fixture: ComponentFixture<DocumnetviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumnetviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumnetviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
