import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { HeroService } from './hero.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidenavComponent} from './sidenav/sidenav.component'
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageComponent,SidenavComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,MatCardModule,MatTooltipModule,MatSidenavModule
    ,MatMenuModule
  ],
  providers: [HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}
