import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentences',
})
export class SentecesPipe implements PipeTransform {
  transform(value: string, nrOfSenteces: number = 1) {
    const senteces = value.split('.');
    console.warn('senteces', senteces);

    return senteces.reduce(
      (text, sentence, index) =>
        index < nrOfSenteces ? text + sentence + '.' : text,
      ''
    );
  }
}
