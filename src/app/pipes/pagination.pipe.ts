import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(
    items: any[],
    itemsForPage: number,
    currentPage: number
  ): any[] {
    const numOfItems = items.length
    if (numOfItems < itemsForPage) return items
    else {
      const start = (currentPage - 1) * itemsForPage
      let end = start + itemsForPage - 1
      end = end > numOfItems ? numOfItems - 1 : end;
      const newItems = []
      for (let i = start; i <= end; i++)
        newItems.push(items[i])
      return newItems
    }
  }
}
