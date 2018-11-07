import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  
  strNum: string[]=[];
  resultPairs: number[]=[];
  resultIndexes: number[]=[];
  


  constructor() { }

  getPairs(intNum: number[], addnum: number): void {

    this.strNum = intNum.toString().split(',');   //converting array of numbers to array of string
    for(let i: number = 0; i < this.strNum.length; i++) {
     
     for(let j = i+1; j < this.strNum.length; j++) {
       
        if(Number(this.strNum[i]) + Number(this.strNum[j]) === Number(addnum)) {
         
         this.resultPairs.push(Number(this.strNum[i]),Number(this.strNum[j]));
         this.resultIndexes.push(i,j);

       }
       
     }  
       
       
     }
  }
}
