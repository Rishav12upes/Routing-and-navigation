import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <!-- <h6 >
    Here the details of Items
</h6> -->
<table class="table">
    <thead>
      <tr>
         <th>Item</th>
         <th>Amount</th>
         <th>Category</th>
          <th>Location</th>
           <th>Spent On</th>
        </tr>
      </thead>
   <tbody>
   <tr  *ngFor="let  data of elements"><td>{{data.item}}</td>

   <td>{{data.amount}}</td>
   <td>{{data.category}}</td>
   <td>{{data.location}}</td>
   <td>{{data.spendOn}}</td>
   <td><button (click)="removeItem(data)" class="btn btn-danger">delete</button>
      </td>


   </tr>
         </tbody>
</table>

  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {
data:any;
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }
  elements= [
    {item:"hardware",amount:"1100",category:"machine",location:"delhi",spendOn:"26july2010"  },
    {item:"software",amount:"1300",category:"os",location:"delhi",spendOn :"12june2020" },
    {item:"pizza",amount:"1000",category:"Food",location:"Noida",spendOn :"8june2021" },
    {item:"burger",amount:"890",category:"FastFood",location:"patna",spendOn :"13june2021" },

  ];
  removeItem(element:any)
  {
    this.elements.forEach((value: any, index: any)=> {
      if(value == element )
      this.elements.splice(index,1);
    });
  }


  ngOnInit() {

this.route.queryParams.subscribe((Params: any)=>{
  console.log(Params);
  this.data=JSON.parse(atob(Params.data));
  this.elements.push(this.data);

})
  }
}
