import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customRound',
})
export class CustomRoundPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value); // Use Math.round to round to the nearest whole number
  }
}
