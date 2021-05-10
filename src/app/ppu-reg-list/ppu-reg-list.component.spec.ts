import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpuRegListComponent } from './ppu-reg-list.component';

describe('PpuRegListComponent', () => {
  let component: PpuRegListComponent;
  let fixture: ComponentFixture<PpuRegListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpuRegListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpuRegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
