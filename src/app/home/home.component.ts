import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data :  any= []
  constructor(private Customerservice: CustomerService) { }

  ngOnInit(): void {
    this.data = this.Customerservice.CustomerRecords
    
  }
  
  

  
}
