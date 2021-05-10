import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConvertorFileComponent } from './test-convertor-file.component';

describe('TestConvertorFileComponent', () => {
  let component: TestConvertorFileComponent;
  let fixture: ComponentFixture<TestConvertorFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestConvertorFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestConvertorFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
