import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    args[0] = args[0] || 10;  //set default value
    return value.length > args[0] ? value.substring(0, args[0]) + '...' : value;
  }

}
