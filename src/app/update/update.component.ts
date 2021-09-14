import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  RecordToEdit :any = []
  constructor(private route:Router,private UpdatedService: CustomerService) { }

  ngOnInit(): void {
  }


  editCustomer = new FormGroup({
    "CustomerId": new FormControl(),
    "Name": new FormControl(),
    "Age": new FormControl(),
    "Gender": new FormControl(),
});
  onUpdate($event:any){
    let EditResult:any = this.UpdatedService.onUpdate($event.target.value)
      this.editCustomer.patchValue({
        "CustomerId": EditResult.CustomerId,
        "Name": EditResult.Name,
        "Age": EditResult.Age,
        "Gender": EditResult.Gender
      })
      
    
   
  }
  onSubmit(){
    this.UpdatedService.saveEditValue(this.editCustomer.value)
    this.route.navigateByUrl('')
  }
}
