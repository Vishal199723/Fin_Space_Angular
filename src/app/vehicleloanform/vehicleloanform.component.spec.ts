import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleloanformComponent } from './vehicleloanform.component';

describe('VehicleloanformComponent', () => {
  let component: VehicleloanformComponent;
  let fixture: ComponentFixture<VehicleloanformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleloanformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleloanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
