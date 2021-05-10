import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorporationTypeMasterComponent } from './incorporation-type-master.component';

describe('IncorporationTypeMasterComponent', () => {
  let component: IncorporationTypeMasterComponent;
  let fixture: ComponentFixture<IncorporationTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorporationTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorporationTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
