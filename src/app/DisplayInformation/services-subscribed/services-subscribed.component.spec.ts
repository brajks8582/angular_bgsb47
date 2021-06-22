import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSubscribedComponent } from './services-subscribed.component';

describe('ServicesSubscribedComponent', () => {
  let component: ServicesSubscribedComponent;
  let fixture: ComponentFixture<ServicesSubscribedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSubscribedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSubscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
