import { Component } from '@angular/core';
import { ResultService } from './result.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

   intNum: number[];
   addNum: number;
   showVar: boolean = false;
   
  constructor(private resultService: ResultService) {}
  
 
  onClickMe(): void {
   
      this.showVar = !this.showVar;  
      this.resultService.getPairs(this.intNum,this.addNum);
    }
    
  

   
}

