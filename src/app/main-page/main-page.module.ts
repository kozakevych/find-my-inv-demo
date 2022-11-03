import { MainPageRoutingModule } from './main-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';

import { GridListComponent } from './grid-list/grid-list.component';
import { CardItemComponent } from './card-item/card-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GridListComponent,
    CardItemComponent,
    MainPageComponent
  ],
  imports: [
    MainPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ]
})
export class MainPageModule { }
