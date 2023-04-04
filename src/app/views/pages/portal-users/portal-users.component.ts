import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-portal-users',
  templateUrl: './portal-users.component.html',
  styleUrls: ['./portal-users.component.scss']
})
export class PortalUsersComponent implements OnInit {

  simpleItems: any = [];
  selectedSimpleItem: any = null;
  

  // Variables for data tables
  // Table headers
  headers = [
    {
      name: 'Full Name',
      sortable: true,
      prop: 'fullName',
    },
    {
      name: 'Email',
      sortable: true,
      prop: 'email',
    },
    {
      name: 'Role',
      sortable: true,
      prop: 'roleName',
    },
    {
      name: 'Phone No',
      sortable: true,
      prop: 'phoneNo',
    },
  ];
  search: string = '';
  limit: number = 10;
  loadingIndicator = true;
  ColumnMode = ColumnMode;
  rows: Object[] = [
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      roleName: 'Admin',
      phoneNo: '+1 773-642-426-1'
    },
  ];

  constructor(private modalService: NgbModal) { }

  openVerticalCenteredModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true, windowClass: 'modal_right', fullscreen: true  }).result.then((result) => {

    }).catch((res) => {});
  }

  ngOnInit(): void {
    this.loadingIndicator = false;
    // const dataTable = new DataTable("#dataTableExample");

    this.simpleItems = ['Admin', 'User', 'Reporter'];
  }

}
