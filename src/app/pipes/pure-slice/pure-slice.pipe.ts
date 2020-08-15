import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSlice'
})
export class PureSlicePipe implements PipeTransform {
  transform<T>(value: ReadonlyArray<T>, start: number, end?: number): Array<T> {
    return value.slice(start, end);
  }
}
