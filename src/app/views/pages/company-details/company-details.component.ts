import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentChange, SelectionChange } from 'ngx-quill';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  htmlText = ``
  quillConfig = {
     toolbar: {
       container: [
         ['bold', 'italic', 'underline'],        // toggled buttons
         ['code-block'],
        //  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
         [{ 'list': 'ordered'}, { 'list': 'bullet' }],
         [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
         [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        //  [{ 'direction': 'rtl' }],                         // text direction

        //  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

         [{ 'align': [] }],

        //  ['clean'],                                         // remove formatting button

        //  ['link'],
         ['link', 'image', 'video']
       ],
     },
    }
    
    representative: any = [];
    selectedUser: any = null;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.representative = ['Phillip Frost', 'Virginia Apgar', 'Jonas Salk'];
  }

  openViewEmployeeModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true, windowClass: 'modal_right full', fullscreen: true  }).result.then((result) => {

    }).catch((res) => {});
  }
  openSentEmailModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true, windowClass: 'modal_right', fullscreen: true  }).result.then((result) => {

    }).catch((res) => {});
  }

  
    onSelectionChanged = (event: SelectionChange) => {
      if(event.oldRange == null) {
        this.onFocus();
      }
      if(event.range == null) {
        this.onBlur();
      }
    }
  
    onContentChanged = (event: ContentChange) => {
      console.log(event.html);
    }
  
    onFocus = () => {
      console.log("On Focus");
    }
    onBlur = () => {
      console.log("Blurred");
    }
}
