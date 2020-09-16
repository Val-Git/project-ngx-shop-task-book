import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    const trunc = Math.trunc(value);
    const fraction = value - trunc;
    if (fraction < 0.25) {
      return trunc;
    }
    if (fraction < 0.75) {
      return trunc + 0.5;
    }
    return trunc + 1;
  }
}
