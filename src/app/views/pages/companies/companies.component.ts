import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  simpleItems: any = [];
  simpleItems2: any = [];
  selectedSimpleItem: any = null;
  selectedSimpleItem2: any = null;

  constructor(private modalService: NgbModal) { }

  openAddCompanyModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true, windowClass: 'modal_right', fullscreen: true  }).result.then((result) => {

    }).catch((res) => {});
  }
  ngOnInit(): void {
    this.simpleItems = ['India', 'USA', 'Japan'];
    this.simpleItems2 = ['Kerala', 'Tamilnadu', 'Karnataka'];
  }

}
