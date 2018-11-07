import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { ResultService } from './result.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild('pairInput') pairInput: ElementRef
  @ViewChild('indexInput') indexInput: ElementRef
  
  intNum: number[];
   addNum: number;
   showVar: boolean = false;
   
  constructor(private resultService: ResultService) {}
  
 
  ngAfterViewInit(): void {
    this.pairInput.nativeElement.value = '';
    this.indexInput.nativeElement.value = '';
  }
  onClickMe(): void {

      this.showVar = !this.showVar;  
      this.resultService.getPairs(this.intNum,this.addNum);
      this.ngAfterViewInit();
      
    }
    
  

   
}

