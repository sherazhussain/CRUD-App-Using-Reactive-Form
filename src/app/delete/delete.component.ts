import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  DeletedResult:any = []
  constructor(private DeleteService: CustomerService, private route: Router) { }

  ngOnInit(): void {
    this.DeletedResult = this.DeleteService.CustomerRecords
    console.log(this.DeletedResult) 
  }

  onDelete($event:any){
    this.DeleteService.onDelete($event.target.value)
    this.route.navigateByUrl('')
  }
}
