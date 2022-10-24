import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'usd'
})
export class EurToUsd implements PipeTransform {
    transform(n: number): string {
        const eurToUsdRate = 0.985767;
        return (n * eurToUsdRate).toFixed(2) + ' USD';
    }
}