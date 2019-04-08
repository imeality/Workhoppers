import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HeroService} from '../hero.service'; 
import { FormControl } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { DragDropModule,moveItemInArray,CdkDragDrop,transferArrayItem } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url_link =new FormControl('');
  link_text=new FormControl('');
  public show:boolean = false;
  public buttonName:any = 'Custom-link Show';

  public btn:boolean=false; 
  public button:any='Custom-link table';


  sentData:any[];
  col: string;  
  // hero:[]
  hero: any = {};
    self:any=this;
  check:any=[];
  g:any;
    link='http://';
    
  constructor(private httpClient:HttpClient){}
  url='http://localhost:2000/post/data';
  url1='http://localhost:2000/show';
  url2='http://localhost:2000/drag/data'; 
  
  myfunc()
{
  url_link:this.url_link.value
  link_text :this.link_text.value
  console.log(this.url_link);
  console.log( this.link_text);
  
}

 

   drop(event: CdkDragDrop<string[]>) {

   
  
    
   console.log(event.previousIndex+"-----------/n-----------"+event.currentIndex); 
   moveItemInArray(this.hero,event.previousIndex, event.currentIndex);
   

   let dat={"data":this.hero,"previousIndex":event.previousIndex,"currentIndex":event.currentIndex  };
  
   this.httpClient.post(this.url2,dat).subscribe(data=> {
   console.log("Get Response is successful"+data);
  
 },
     error  => {console.log("Error", error); });
 }
 
   senddata()
   {
    let Data = 
      {url_link:this.url_link.value,link_text:this.link_text.value} 
       console.log(Data);
        
             
        this.httpClient.post(this.url,Data).subscribe(Data=> {
        console.log("POST Request is successful ", Data);
         },
        error  => {console.log("Error", error); });
      }
      
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
        
      }


  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Custom-link Hide";
    else
      this.buttonName = "Custom-link Show";
  }
 tog()
 {
     this.btn=!this.btn;
     if(this.btn)
     {
       this.button="Custom-link table hide";
     }
     else{
            this.button="Custom-link table";
     }
 }
   
  ngOnInit() {
 
    
 let t =  this.showdata();
 this.drop;
//  moveItemInArray
 }

}