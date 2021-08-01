import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor() { }
  userName="default-value";
  password=  "********";
  phoneNumber="+91-9876543290";
    clickMe(){
      alert(this.userName);
      alert(this.password);

    }

  ngOnInit(): void {
  }

}
