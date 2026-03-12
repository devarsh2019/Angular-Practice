import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDataList',
  standalone: false,
})
export class PipeDataListPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
   return value.slice(0, 100) + '...';
  }
}
