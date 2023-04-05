import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeoplesData, Person } from '../../../core/dummy-datas/peoples.data';

@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.scss']
})
export class RepresentativeComponent implements OnInit {

  simpleItems: any = [];
  simpleItems2: any = [];
  selectedSimpleItem: any = null;
  selectedSimpleItem2: any = null;
  groupedMultiSelectedPeople: any = null;

  people: Person[] = [];
  selectedPersonId: string = '';

  selectedPeople: any = null;

  constructor(private modalService: NgbModal) { }

  openAddRepresentativeModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true, windowClass: 'modal_right', fullscreen: true  }).result.then((result) => {

    }).catch((res) => {});
  }
  
  openRepresentativeModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true, windowClass: 'modal_right', fullscreen: true  }).result.then((result) => {

    }).catch((res) => {});
  }

  openDeleteRepresentativeModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true }).result.then((result) => {

    }).catch((res) => {});
  }

  ngOnInit(): void {
    this.simpleItems = ['India', 'USA', 'Japan'];
    this.simpleItems2 = ['Kerala', 'Tamilnadu', 'Karnataka'];
    this.people = PeoplesData.peoples;
    
  }

}
