import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComp1Component } from './mi-comp1.component';

describe('MiComp1Component', () => {
  let component: MiComp1Component;
  let fixture: ComponentFixture<MiComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
