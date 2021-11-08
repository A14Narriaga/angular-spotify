import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'validateImg',
})
export class ValidateImgPipe implements PipeTransform {
	transform(imgsUrl: any[]): string {
		return imgsUrl && imgsUrl.length > 0
			? imgsUrl[0].url
			: 'assets/img/noImg.png'
	}
}
