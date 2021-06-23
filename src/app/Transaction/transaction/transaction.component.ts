import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  form = new FormGroup({
    gender: new FormControl('', Validators.required),
    mode: new FormControl('', Validators.required),
    type: new FormControl('',Validators.required),
    beneficiary: new FormControl('',Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
