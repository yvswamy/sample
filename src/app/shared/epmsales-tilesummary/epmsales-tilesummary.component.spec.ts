/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EpmsalesTilesummaryComponent } from './epmsales-tilesummary.component';

describe('EpmsalesTilesummaryComponent', () => {
  let component: EpmsalesTilesummaryComponent;
  let fixture: ComponentFixture<EpmsalesTilesummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmsalesTilesummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmsalesTilesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
