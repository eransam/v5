import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(number: number): string {
    return new Intl.NumberFormat().format(number);
  }
}
