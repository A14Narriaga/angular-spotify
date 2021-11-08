import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
	transform(
		array: any[],
		itemsForPage: number,
		numOfPages: number,
		currentPage: number
	): any[] {
		const numOfItems = array.length
		if (numOfItems < itemsForPage) return array
		else {
			const start = (currentPage - 1) * itemsForPage
			const end = start + itemsForPage - 1
			const newArray = []
			for (let i = start; i <= end; i++) {
				newArray.push(array[i])
			}
			return newArray
		}
	}
}
