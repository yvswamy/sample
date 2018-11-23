/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EpmsalesBreadcrumbComponent } from './epmsales-breadcrumb.component';

describe('EpmsalesBreadcrumbComponent', () => {
  let component: EpmsalesBreadcrumbComponent;
  let fixture: ComponentFixture<EpmsalesBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmsalesBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmsalesBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
