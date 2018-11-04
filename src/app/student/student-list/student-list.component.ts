import { Component, OnInit, TemplateRef } from '@angular/core';
import {Http} from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentService } from '../student.service';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {Server} from '../../../utils/Server'

const URL = Server.API_ENDPOINT+'/file';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  position = 'bottom';
  //role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  role = "hallOfficer";
  public uploader:FileUploader = new FileUploader({url: URL});

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  bsValue = new Date();
  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;
  public fileUploadModalRef :BsModalRef; 

  constructor(public http: Http, 
    private modalService: BsModalService,
    private studentService: StudentService,
    private toastyService: ToastyService,
    private router: Router) { }

  ngOnInit() {
    // this.http.get(`assets/data/data.json`)
    // .subscribe((data) => {
    //   this.data = data.json();
    // });
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
    }
    else {
      this.router.navigate(['/**']);
    }
    this.getStudentList();

  }

  getStudentList(){
    this.studentService.getStudentList()
    .subscribe((response) => { 
      console.log(response);
      this.data = response;
    }, error => {
      this.errorViewToast();
    });
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "";
    else this.modalHeader = "তথ্য সংশোধন";
  }

  public openFileUploadModal(template: TemplateRef<any>) {
    this.fileUploadModalRef = this.modalService.show(template);
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

  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

  successToast(){
    this.addToast({
      title:'Success', 
      msg:'Operation successful.', 
      timeout: 5000, theme:'material', 
      position:'bottom', 
      type:'success'
    });
  }

  errorToast(){
    this.addToast({
      title:'Error', 
      msg:'Operation not successful.', 
      timeout: 5000, theme:'material', 
      position:'bottom', 
      type:'error'
    });
  }

  errorViewToast() {
    this.addToast({
      title: 'Error',
      msg: 'Check Internet Connection.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

  


}
