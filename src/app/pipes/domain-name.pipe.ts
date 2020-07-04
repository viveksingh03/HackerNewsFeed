import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainName'
})
export class DomainNamePipe implements PipeTransform {

  transform(url: string, ...args: unknown[]): string {
    if (url !== '' && url !== null) {
      return url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
    }
    return '';
  }
}
