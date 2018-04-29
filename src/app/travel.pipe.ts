import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'travel'
})
export class TravelPipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    return value.substr(0,limit)
  }


}
