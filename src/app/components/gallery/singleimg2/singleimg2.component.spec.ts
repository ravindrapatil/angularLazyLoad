import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Singleimg2Component } from './singleimg2.component';

describe('Singleimg2Component', () => {
  let component: Singleimg2Component;
  let fixture: ComponentFixture<Singleimg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Singleimg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Singleimg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
