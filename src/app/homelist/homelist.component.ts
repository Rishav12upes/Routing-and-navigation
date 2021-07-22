import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {
  msgService: any;

  constructor() { }
products={};

  ngOnInit() {
 this.msgService.product().subscribe((productData: {})=>this.products=productData)

  }
  btnClick(){
    this.msgService.messageAlert();
  }

}
