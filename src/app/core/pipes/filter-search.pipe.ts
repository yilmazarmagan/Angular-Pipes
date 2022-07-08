import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  transform(items: any[], filter: string): any[] {
    filter = filter ? filter.toLocaleLowerCase() : null;
    return filter
      ? items.filter(
          (item: any) => item.email.toLocaleLowerCase().indexOf(filter) !== -1
        )
      : items;
  }
}
