import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    if (!countOfReviews) {
      return 'Нет отзывов';
    }

    let count = countOfReviews;
    count %= 100;
    if (count >= 5 && count <= 20) {
      return `${countOfReviews} отзывов`;
    }
    count %= 10;
    if (count === 1) {
      return `${countOfReviews} отзыв`;
    }
    if (count >= 2 && count <= 4) {
      return `${countOfReviews} отзыва`;
    }
    return `${countOfReviews} отзывов`;
  }
}
