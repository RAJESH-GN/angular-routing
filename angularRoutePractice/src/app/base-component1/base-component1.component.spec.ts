import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent1Component } from './base-component1.component';

describe('BaseComponent1Component', () => {
  let component: BaseComponent1Component;
  let fixture: ComponentFixture<BaseComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
