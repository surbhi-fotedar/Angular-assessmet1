import { Component, OnInit, Input } from '@angular/core';

import { ResultService } from '../result.service';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.css']
})
export class ResultSectionComponent implements OnInit { //to display the Result Section after button click

 
  errorMessage: string='No pair Found';
  @Input() showResult: Boolean;
  
  constructor(public resultService: ResultService) {}

  ngOnInit() {
    
  }


}
