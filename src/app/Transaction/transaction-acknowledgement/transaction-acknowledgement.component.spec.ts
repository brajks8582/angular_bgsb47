import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAcknowledgementComponent } from './transaction-acknowledgement.component';

describe('TransactionAcknowledgementComponent', () => {
  let component: TransactionAcknowledgementComponent;
  let fixture: ComponentFixture<TransactionAcknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionAcknowledgementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
