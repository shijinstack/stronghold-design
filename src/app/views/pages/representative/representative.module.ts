import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RepresentativeComponent } from './representative.component';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
  {
    path: '',
    component: RepresentativeComponent
  }
]


@NgModule({
  declarations: [
    RepresentativeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgSelectModule,
    NgbDropdownModule
  ]
})
export class RepresentativeModule { }
