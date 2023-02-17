import { Pipe, PipeTransform } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';

@Pipe({ name: 'rating' })
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    return formatRating(value);
  }
}
