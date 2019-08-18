import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {PhonePipe} from "./phoneFormat";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    JwPaginationComponent,
    PhonePipe

  ],
  exports: [
    CommonModule,
    FormsModule,
    JwPaginationComponent,
    PhonePipe
  ]
})
export class SharedModule { }
