import { Component, TemplateRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  bsValue = new Date();
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;
  typeData: any;
  selectedMainType: any = '';
  allSubType: Array<any> = [];
  selectedSubType: any = '';
  selectedDate: any;
  modalHeader:string;
  myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
  };
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  constructor(public http: Http, private modalService: BsModalService) { }

  ngOnInit() {

    this.http.get(`assets/data/expenseType.json`)
    .subscribe((typeData) => {
      this.typeData = typeData.json();
    });

    this.http.get(`assets/data/income.json`)
    .subscribe((data) => {
      this.data = data.json();
    });
  }


  
  selectMainType (event: any) {
    
    this.selectedMainType = event.target.value; 
    this.getSubTypes();
  }


  getSubTypes() {
    
    this.typeData.forEach(element => {
      
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

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন ব্যয় যুক্ত করুন";
    else this.modalHeader = "হিসাব সংশোধন";
  }

  confirm(): void {
    console.log('Confirmed!');
    this.modalRef.hide();
  }
 
  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(): void {
    this.deleteModalRef.hide();
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }

}
