import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
message:string[]=[];
add(message:string){
  this.message.push(message);
}
clear(){
  this.message=[];
}
  constructor() {  }
}
