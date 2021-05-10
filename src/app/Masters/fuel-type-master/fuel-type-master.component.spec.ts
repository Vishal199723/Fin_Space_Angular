import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelTypeMasterComponent } from './fuel-type-master.component';

describe('FuelTypeMasterComponent', () => {
  let component: FuelTypeMasterComponent;
  let fixture: ComponentFixture<FuelTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
