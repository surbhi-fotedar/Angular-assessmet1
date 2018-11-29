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
   results: any[];
   genNum: number;
   minRange: number = 1;
   maxRange: number = 100;
   randNum: number[]=[];
   
  constructor(private resultService: ResultService) {}
 
  onGenerate(): void {
    while(this.randNum.length < this.genNum){
      let r = Math.floor(Math.random()*(this.maxRange-this.minRange+1)+this.minRange);
      if(this.randNum.indexOf(r) === -1) {
        this.randNum.push(r);
      }
  }
  this.intNum = this.randNum;
  }
  onClickMe(): void {
  
      this.showVar = true; 
      this.results = this.resultService.getPairsOptimized(this.intNum,this.addNum);
      this.setValue();    
    }

    setValue(): void {
      this.intNum = null;
      this.addNum = null;
    }   
}

