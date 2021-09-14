import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Record: any = [];
  constructor(private route:Router, private service: CustomerService) { }

  ngOnInit(): void {
    this.Record = this.service.CustomerRecords
    
  }



  customer = new FormGroup({
    "CustomerId": new FormControl(null, Validators.required),
    "Name": new FormControl(null, Validators.required),
    "Age": new FormControl(null, Validators.required),
    "Gender": new FormControl(null, Validators.required),
});

  onSubmit() {
   

   this.service.setCustomerValue(this.customer); 
    this.route.navigateByUrl('')
  
  }



}


