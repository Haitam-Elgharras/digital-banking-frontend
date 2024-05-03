import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { customer } from '../models/customer.model';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  customers: Array<customer> | undefined;
  errorMessage: Object = '';
  searchFromGroup!: FormGroup;

  constructor(private customerService:CustomerService,private fb : FormBuilder) { }


  ngOnInit() {

    this.searchFromGroup = this.fb.group({
      keyword: this.fb.control('')
    });


    this.customerService.getCustomers()
    .subscribe({
      next: data => {
        this.customers = data;
      },
      error: error => this.errorMessage = error.message
    });
  }

  handleSearchCustomers() {
    this.customerService.searchCustomers(this.searchFromGroup?.value.keyword)
    .subscribe({
      next: data => {
        this.customers = data;
        console.log(data);
      },
      error: error => this.errorMessage = error.message
    });

  }
  
}