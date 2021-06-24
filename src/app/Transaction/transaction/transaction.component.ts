import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  public TransactionSuccessful=false;
  currentDate = new Date();
  form = new FormGroup({
    TransactionMode: new FormControl('', Validators.required),
    Type: new FormControl('',Validators.required),
    BeneficiaryID: new FormControl('',Validators.required),
    TransactionAmount: new FormControl('',Validators.required),
    AccountNo:new FormControl('9'),
    TransactionDate:new FormControl(this.currentDate),
    TransactionStatus:new FormControl('Completed'),
  });
  
  get f(){
    return this.form.controls;
  }
  
  
  submit(){
    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': 'my-auth-token',
       'status':'ok'
      })
   };
   
    this.http.post('https://localhost:44352/api/TransactionsAccount', this.form.value,{headers: new HttpHeaders({'status': 'ok' || 'ok'})}).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
    this.TransactionSuccessful =true;
  }
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

}
