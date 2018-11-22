/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EpmsalesChartboardComponent } from './epmsales-chartboard.component';

describe('EpmsalesChartboardComponent', () => {
  let component: EpmsalesChartboardComponent;
  let fixture: ComponentFixture<EpmsalesChartboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmsalesChartboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmsalesChartboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
