/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventListingComponent } from './event-listing.component';

describe('EventListingComponent', () => {
  let component: EventListingComponent;
  let fixture: ComponentFixture<EventListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
