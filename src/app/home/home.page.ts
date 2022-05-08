import { Component } from '@angular/core';
import { Page1Page } from '../page1/page1.page';
import { Page2Page } from '../page2/page2.page';
import { Page3Page } from '../page3/page3.page';
import { Page4Page } from '../page4/page4.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  page1Page = Page1Page;
  page2Page = Page2Page;
  page3Page = Page3Page;
  page4Page = Page4Page;
  constructor() {}

}
