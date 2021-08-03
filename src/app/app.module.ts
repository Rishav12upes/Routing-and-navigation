import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelistComponent } from './homelist/homelist.component';
import {HttpClientModule} from '@angular/common/http';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EdittableComponent } from './edittable/edittable.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   HomelistComponent,
   EditprofileComponent,
   EdittableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormGroup,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
    
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
