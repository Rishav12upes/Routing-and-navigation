
import { Component, ElementRef, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { ViewChild } from '@angular/core';

import { EditprofileComponent } from '../editprofile/editprofile.component';


@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {

userName="ranbow" ;
  @ViewChild('box')box!: ElementRef;
  @ViewChild(EditprofileComponent)child!:EditprofileComponent;
  constructor(private designService:DesignService) {}
  products={};


  ngOnInit() {

    this.designService.getUserData().subscribe(data =>this.products=data);
    // this.designService.getUserData().subscribe(data =>console.log(data));
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor="red";
    // this.box.nativeElement.classList="boxred";
    // this.box.nativeElement.innerHTML="This is modified HTML";
     console.log(this.child);

  }
  changechildproperty(){
    this.child.userName="angular";
    this.child.password="#######";
     this.child.phoneNumber="+91-7698765432";
  }
  callchildmethod(){
  this.child.clickMe();
  }
  // productselected:boolean=false;
  // onselectedproduct(product:any){

  // this.productselected=true;
  // this.onselectedproduct=product;
}




