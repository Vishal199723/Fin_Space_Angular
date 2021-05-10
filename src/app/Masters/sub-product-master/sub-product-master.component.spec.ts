import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductMasterComponent } from './sub-product-master.component';

describe('SubProductMasterComponent', () => {
  let component: SubProductMasterComponent;
  let fixture: ComponentFixture<SubProductMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProductMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
