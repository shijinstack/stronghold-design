import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portal-users',
  templateUrl: './portal-users.component.html',
  styleUrls: ['./portal-users.component.scss']
})
export class PortalUsersComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openVerticalCenteredModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true, windowClass: 'modal_right', fullscreen: true  }).result.then((result) => {
      
    }).catch((res) => {});
  }

  ngOnInit(): void {
  }

}
