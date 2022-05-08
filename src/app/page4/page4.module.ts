import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Page4Page } from './page4.page';

import { Day4Pipe } from '../pipes/day4.pipe';
import { DateFormatting4Pipe } from '../pipes/date-formatting4.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [Page4Page, Day4Pipe, DateFormatting4Pipe],
  exports: [Day4Pipe, DateFormatting4Pipe]

})
export class Page4PageModule {}
