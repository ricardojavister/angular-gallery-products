import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatImage'
})
export class FormatImagePipe implements PipeTransform {

  transform(value: string, type: string): string {
    return './assets/'+ type +'/' + value + '.jpg';
  }

}
