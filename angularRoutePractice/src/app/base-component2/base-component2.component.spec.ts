import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent2Component } from './base-component2.component';

describe('BaseComponent2Component', () => {
  let component: BaseComponent2Component;
  let fixture: ComponentFixture<BaseComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
