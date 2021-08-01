import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.css']
})
export class EdittableComponent implements OnInit {
  @Input('id') id: string | undefined;
  @Output() customerUpdated = new EventEmitter();
  // customers: Customer[] = customers;
  CustomerForm = new FormGroup({
    item: new FormControl("",Validators.required),
    amount:new FormControl("",Validators.required),
   category: new FormControl("",Validators.required),
   location: new FormControl("",Validators.required),
   spendOn: new FormControl("",Validators.required)
    });
    editCustomer: any;      //editCustomer: customer;

  goBack(){

  }


  constructor() { }

  ngOnInit() {
    // this.editCustomer = this.customers.find(x => x.id === this.id);
    this.CustomerForm.patchValue(this.editCustomer);
  }
  updateCustomer() {
    var updateCustomer: Customer = {
      id : this.id,
      item: this.CustomerForm.value[' item'],
      amount: this.CustomerForm.value['amount'],
      category: this.CustomerForm.value[' category'],
      location: this.CustomerForm.value['location'],
      spendOn: this.CustomerForm.value['address'],

    };

    this.customerUpdated.emit("true");

    // const update = this.customers.findIndex(x => x.id === this.id);
    // this.customers[update] = updateCustomer;
    // this.customerUpdated.emit("true");

  }


}
