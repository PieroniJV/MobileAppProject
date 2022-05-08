import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { Page1PageModule } from '../page1/page1.module';
import { Page3PageModule } from '../page3/page3.module';
import { Page2PageModule } from '../page2/page2.module';
import { Page4PageModule } from '../page4/page4.module';
//import { DayPipe } from '../pipes/day.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperTabsModule,
    Page1PageModule,
    Page2PageModule,
    Page3PageModule,
    Page4PageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
