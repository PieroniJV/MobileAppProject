import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Page1Page } from './page1.page';

import { DayPipe } from '../pipes/day.pipe';
import { DateFormattingPipe } from '../pipes/date-formatting.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [Page1Page, DayPipe, DateFormattingPipe],
  exports: [DayPipe, DateFormattingPipe]

})
export class Page1PageModule {}
