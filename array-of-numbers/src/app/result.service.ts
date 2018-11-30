import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  strNum: string[] = [];
  resultPairs: any[];
  intRes: string[]=[];
  constructor() { }

  // getPairs(intNum: number[], addnum: number) {

  //   this.strNum = intNum.toString().split(',');   //converting array of numbers to array of string
  //   for (let i: number = 0; i < this.strNum.length; i++) {

  //     for (let j = i + 1; j < this.strNum.length; j++) {

  //       if (Number(this.strNum[i]) + Number(this.strNum[j]) === Number(addnum)) {

  //         this.resultPairs.push(
  //           {
  //             pair: '[' + Number(this.strNum[i]) + ', ' + Number(this.strNum[j]) + ']',
  //             indexes: '[' + i + ', ' + j +']'
  //           }
  //         );
  //       }
  //     }
  //   }
  //   return this.resultPairs;
  // }

  getPairsOptimized(intNum: number[], addnum: number) {
    this.strNum = intNum.toString().split(',');   //converting array of numbers to array of string
    this.intRes.length = this.strNum.length;
    this.resultPairs = [];
    for(let num in this.strNum) {

      if(Number(this.strNum[num]) < addnum) {
        let target = addnum - Number(this.strNum[num]);

        if(!this.intRes.includes(target.toString())) {
  
          this.intRes.push(this.strNum[num]);
        }else {
          this.resultPairs.push(
            {
              pair: '[' + this.strNum[num] + ', ' + target + ']',
              indexes: '[' + num + ', ' + this.strNum.indexOf(target.toString()) +']'
            }
          );
        }
      }
           
    }
    return this.resultPairs;
  }
}
