import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipePipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.split('').reverse().join('') : value
  }

}
