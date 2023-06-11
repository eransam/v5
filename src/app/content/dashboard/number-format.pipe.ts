import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: any): string {
    let number: number;

    // Check if the value is a string and convert it to a number
    if (typeof value === 'string') {
      number = parseFloat(value);
    } else if (typeof value === 'number') {
      number = value;
    } else {
      // Return the value as-is if it's not a string or number
      return value;
    }

    // Format the number and return it as a string
    return new Intl.NumberFormat().format(number);
  }
}
