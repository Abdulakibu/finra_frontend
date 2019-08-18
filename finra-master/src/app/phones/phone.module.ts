import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhoneListComponent } from './phone-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'phones', component: PhoneListComponent },
    ]),
    SharedModule
  ],
  declarations: [
    PhoneListComponent,
    ConvertToSpacesPipe
  ]
})
export class PhoneModule { }
