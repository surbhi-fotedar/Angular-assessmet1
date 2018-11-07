import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  ngOnInit () {  }
  
  intnum: number[] = [2,4,1,5,9,13,12,3,8];
  add: number = 12;
  firstvalue: number;
  Secondvalue: number;

  onClickMe() {
    
   for(let i: number = 0; i < this.intnum.length; i++) {
    for(let j = i+1; j < this.intnum.length; j++) {
      if(this.intnum[i] + this.intnum[j] == 12) {
        console.log('pair found ' + this.intnum[i] +' ' +this.intnum[j] +' indexes '+ i +' '+j );

        this.firstvalue = this.intnum[i];
        this.Secondvalue = this.intnum[j];
      }
      else {
        console.log('no pair');
      }
    }  
      
      
    }

  }

 
  // name: any;
  // str: any;

  // changeLabelName(event: any) {
  //   console.log(event.target);
  //   this.name = this.str;
  // } 
}

