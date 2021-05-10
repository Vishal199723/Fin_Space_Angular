import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpuLoandocumentationComponent } from './ppu-loandocumentation.component';

describe('PpuLoandocumentationComponent', () => {
  let component: PpuLoandocumentationComponent;
  let fixture: ComponentFixture<PpuLoandocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpuLoandocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpuLoandocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
