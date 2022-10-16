import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 50, ellipses = '...') {
    return value.length <= limit
      ? value
      : `${value.slice(0, limit)}${ellipses}`;
  }
}
