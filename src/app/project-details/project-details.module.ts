import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';

import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    MatTabsModule,
    ProjectDetailsRoutingModule,
    CommonModule
  ]
})
export class ProjectDetailsModule { }
