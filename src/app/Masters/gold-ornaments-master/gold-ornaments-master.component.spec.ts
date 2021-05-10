import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldOrnamentsMasterComponent } from './gold-ornaments-master.component';

describe('GoldOrnamentsMasterComponent', () => {
  let component: GoldOrnamentsMasterComponent;
  let fixture: ComponentFixture<GoldOrnamentsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldOrnamentsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldOrnamentsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
