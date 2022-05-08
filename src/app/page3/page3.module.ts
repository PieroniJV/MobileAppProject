import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Page3Page } from './page3.page';

import { Day3Pipe } from '../pipes/day3.pipe';
import { DateFormatting3Pipe } from '../pipes/date-formatting3.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [Page3Page, Day3Pipe, DateFormatting3Pipe],
  exports: [Day3Pipe, DateFormatting3Pipe]

})
export class Page3PageModule {}
