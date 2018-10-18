import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { Http } from '@angular/http';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  public data: any;
  selectedMainType: any = '';
  allSubType: Array<any> = [];
  selectedSubType: any = '';
  selectedDate: any;

  myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
  };

  constructor(public http: Http) { }

  ngOnInit() {

    this.http.get(`assets/data/incomeType.json`)
    .subscribe((data) => {
      this.data = data.json();
    });
  }


  selectMainType (event: any) {
    
    this.selectedMainType = event.target.value; 
    this.getSubTypes();
  }


  getSubTypes() {
    
    this.data.forEach(element => {
      
      if( element.typeMain === this.selectedMainType ) {
        this.allSubType = element.subType;
        console.log(this.allSubType);
      }
      
    });
  }


  selectSubType (event: any) {

    this.selectedSubType = event.target.value;
    console.log(this.selectedSubType);
  }


  onDateChanged(event: IMyDateModel) {
        this.selectedDate = event.date;
        console.log(this.selectedDate);
  }

}