import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'filterArrayOfCustomers',
})
export class FilterArrayOfCustomersPipe implements PipeTransform {
  transform(value: object[], propertyName: string, serchTerm: string): object {
    return value?.filter((item) => item[propertyName].includes(serchTerm));
  }
}
