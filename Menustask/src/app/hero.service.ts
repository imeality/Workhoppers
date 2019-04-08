import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero: any = {};
  constructor(private httpClient:HttpClient ) { }

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

}
