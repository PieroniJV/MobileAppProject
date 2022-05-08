import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatting'
})
export class DateFormattingPipe implements PipeTransform {

  transform(unixTimestamp: string[]): unknown {
    const a = new Date(+unixTimestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[a.getDay()] + ', ' + a.getDate() + ' ' + months[a.getMonth()] + ' ' + a.getHours() + ':' + a.getMinutes();
    }
}
