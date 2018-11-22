/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EpmsalesExecsummaryComponent } from './epmsales-execsummary.component';

describe('EpmsalesExecsummaryComponent', () => {
  let component: EpmsalesExecsummaryComponent;
  let fixture: ComponentFixture<EpmsalesExecsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmsalesExecsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmsalesExecsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
