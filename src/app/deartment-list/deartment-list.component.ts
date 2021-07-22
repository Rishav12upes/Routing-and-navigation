import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deartment-list',
  template: `
   <h6>
    Fill the Following Data In Input Form</h6><br>
    <!-- <ul class="items">
      <li *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul> -->

    <form [formGroup]="profileForm">
      <div class="form-row mb-4">
      <div class="col">
        <label for="item">Item </label><br>
          <input  type="text" formControlName="item" id="item" class="form-control" placeholder="Enter the item"><br>
      </div>
      <div class="col">
        <label for="amount">Amount </label><br>
          <input type="text" formControlName="amount" id="amount" class="form-control" placeholder="Enter the amount"><br>
      </div>
    <div class="col">
      <label for="category">Category</label><br>
    <input  type="text" formControlName="category" id="category" class="form-control mb-4" placeholder="Enter the category">
    </div>
    <div class="col">
      <label for="location">Location</label><br>
    <input  type="text" formControlName="location" id="location" class="form-control mb-4" placeholder="Enter the location">
    </div>
    <div class="col">
      <label for="spendOn">Spent On</label><br>
    <input  type="text" formControlName="spendOn" id="spendOn" class="form-control mb-4" placeholder="Enter the spendOn TIME">
    </div>
    <button (click)="onSubmit()" class="btn btn-primary my-4 btn-block"[disabled]="profileForm.invalid">Save</button>&nbsp;

  </div>
    </form>

  `,
  styles: [
  ]
})
export class DeartmentListComponent implements OnInit {

  // departments=[
  //   {"id":1,"name":"Angular"},
  //   {"id":2,"name":"Node"},
  //   {"id":3,"name":"Mongodb"},
  //   {"id":4,"name":"Ruby"},
  //   {"id":5,"name":"Bootstrap"}



  // ]

  constructor(
    private router:Router,
    private Route:ActivatedRoute
  ) { }
  profileForm = new FormGroup({
    item: new FormControl("",Validators.required),
    amount:new FormControl("",Validators.required),
   category: new FormControl("",Validators.required),
   location: new FormControl("",Validators.required),
   spendOn: new FormControl("",Validators.required)
    });
  onSubmit(){
    let data:any=this.profileForm.value;
    this.router.navigate(['/about'],{
      queryParams:{data:btoa(JSON.stringify(data))}
    })
  }

  ngOnInit(): void {
  }

}
