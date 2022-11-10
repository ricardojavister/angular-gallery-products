import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatImage'
})
export class FormatImagePipe implements PipeTransform {

  transform(value: string, folder: string, ext: string ): string {
    return './assets/'+ folder +'/' + value + ext;
  }

}
