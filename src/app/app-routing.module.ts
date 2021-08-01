import { HomelistComponent } from './homelist/homelist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeartmentListComponent } from './deartment-list/deartment-list.component';


import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomelistComponent},
  {path:'menu',component:DeartmentListComponent},
  {path:'about',component:EmployeeListComponent},
  {path: "**", component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomelistComponent,DeartmentListComponent,EmployeeListComponent,PageNotFoundComponent]
