import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  ngOnInit () {  }
  
  strnum: number[];
  intnum: string[];
  add: number;
  firstvalue: string;
  Secondvalue: string;
  firstIndex: number;
  secondIndex: number;
  
  
  onClickMe() {
        
    this.intnum = this.strnum.toString().split(',');
   for(let i: number = 0; i < this.strnum.toString().split(',').length; i++) {
    
    for(let j = i+1; j < this.strnum.toString().split(',').length; j++) {
      
       if(Number(this.intnum[i]) + Number(this.intnum[j]) === Number(this.add)) {
        console.log('pair found ' + this.intnum[i] +' ' +this.intnum[j] +' indexes '+ i +' '+j );

        this.firstvalue = this.intnum[i];
        this.firstIndex = i;
        this.Secondvalue = this.intnum[j];
        this.secondIndex = j;
      }
      else {
        console.log('no pair');
      }
    }  
      //  2,4,1,5,9,13,12,3,8 
      
    }

  }

 
  // name: any;
  // str: any;

  // changeLabelName(event: any) {
  //   console.log(event.target);
  //   this.name = this.str;
  // } 
}

