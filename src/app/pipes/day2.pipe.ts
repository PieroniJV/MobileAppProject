import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day2'
})
export class Day2Pipe implements PipeTransform {

  transform(value: unknown): unknown {
    const a = new Date(+value * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[a.getDay()];
  }

}
