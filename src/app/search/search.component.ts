import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    SearchResult: any = []
  constructor(private route: Router,private searchService: CustomerService) { }

  ngOnInit(): void {
  }

  onSearch($event:any){
    this.SearchResult = this.searchService.onSearch($event.target.value)
    // this.SearchResult.filter((x:any) => x.Name === $event.target.value)
    //this.route.navigateByUrl('')
  }
  onClick(){
    this.route.navigateByUrl('')
  }
}
