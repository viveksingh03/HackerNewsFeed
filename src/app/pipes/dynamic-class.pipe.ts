import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicClass'
})
export class DynamicClassPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const dataValue = Number(value);
    if (dataValue < 50) {
      return 'black';
    }
    if (dataValue < 75) {
      return 'red-black';
    }
    if (dataValue < 100) {
      return 'dark-orange';
    }
    return value = 'orange';
  }
}
