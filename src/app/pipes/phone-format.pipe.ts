import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(number: string) {
    number = number.charAt(0) != '0' ? '0' + number.charAt(2) : '-' + number;
    return number;
  }
}
