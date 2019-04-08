import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageComponent} from './page/page.component';
import {SidenavComponent} from './sidenav/sidenav.component'
const routes: Routes = [
      {path:'dashboard', component:DashboardComponent},
      {path:'page',component:PageComponent},
      {path:'sidenav',component:SidenavComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
