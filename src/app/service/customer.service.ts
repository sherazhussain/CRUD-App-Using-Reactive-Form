import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  CustomerRecords: any = [
    {
      "CustomerId": 1,
      "Name": 'Sheraz',
      "Age": 32,
      "Gender": 'male'
  },
  {
    "CustomerId": 2,
    "Name": 'Hamza',
    "Age": 25,
    "Gender": 'female'
},
{
  "CustomerId": 3,
  "Name": 'Umer',
  "Age": 36,
  "Gender": 'male'
}
  ]

 
  constructor() { }


setCustomerValue (form:any) {
  this.CustomerRecords.push(form.value);
  console.log(this.CustomerRecords)
}

onSearch(value:string){
  return this.CustomerRecords.filter((x:any) => x.Name == value)
  // let name:any = this.CustomerRecords.filter(x => x.Name === value)
}
onDelete(id:Number){
  
  let DeletedRecord:any = this.CustomerRecords.find((x:any) => x.CustomerId == id)
  let index = this.CustomerRecords.indexOf(DeletedRecord,0);
  this.CustomerRecords.splice(index,1)

}

onUpdate(id:Number) {
  return this.CustomerRecords.find((x:any) => x.CustomerId == id) 
}

saveEditValue(newCustomer:any) {
  let oldValue:any = this.CustomerRecords.find((x:any) => x.CustomerId == newCustomer.CustomerId)
  
  oldValue.Name= newCustomer.Name
  oldValue.Age= newCustomer.Age
  oldValue.Gender= newCustomer.Gender
  
}
  
}



