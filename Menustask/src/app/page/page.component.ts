import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  hero:any={};
  constructor(private httpClient:HttpClient) { }
  url1='http://localhost:2000/show'; 
     
          
  showdata()
  {
this.httpClient.get(this.url1).subscribe(data=> {
             
  this.hero=data;
      
    console.log("Get Response is successful");
     console.log(data);

      // this.hero=data.hero;
       console.log(this.hero);   
       

  },
    error  => {console.log("Error", error); });
    // alert("Heelo");
   return this.hero;  
  }

 
   ngOnInit() {
        this.showdata();

      }
}
