import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getHours'
})
export class GetHoursPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const dt1 = new Date();
    const dt2 = new Date(value);

    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    const hours = Math.abs(Math.round(diff));
    const days = Math.floor(hours / 24);

    if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return days > 1 ? `${days} days ago` : `${days} day ago`;
    }
  }
}
