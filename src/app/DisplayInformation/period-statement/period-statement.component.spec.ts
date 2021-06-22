import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodStatementComponent } from './period-statement.component';

describe('PeriodStatementComponent', () => {
  let component: PeriodStatementComponent;
  let fixture: ComponentFixture<PeriodStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
