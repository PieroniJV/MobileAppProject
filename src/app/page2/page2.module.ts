import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Page2Page } from './page2.page';

import { Day2Pipe } from '../pipes/day2.pipe';
import { DateFormatting2Pipe } from '../pipes/date-formatting2.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [Page2Page, Day2Pipe, DateFormatting2Pipe],
  exports: [Day2Pipe, DateFormatting2Pipe]

})
export class Page2PageModule {}
