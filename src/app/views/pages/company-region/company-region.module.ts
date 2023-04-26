import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRegionComponent } from './company-region.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

const routes: Routes = [
  {
    path: '',
    component: CompanyRegionComponent
  }
]

@NgModule({
  declarations: [
    CompanyRegionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgSelectModule,
    NgbTooltipModule,
    QuillModule.forRoot(), // ngx-quill
    NgbDropdownModule
  ]
})
export class CompanyRegionModule { }
