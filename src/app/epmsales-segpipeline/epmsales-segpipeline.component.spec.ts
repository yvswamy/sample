/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EpmsalesSegpipelineComponent } from './epmsales-segpipeline.component';

describe('EpmsalesSegpipelineComponent', () => {
  let component: EpmsalesSegpipelineComponent;
  let fixture: ComponentFixture<EpmsalesSegpipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmsalesSegpipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmsalesSegpipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
