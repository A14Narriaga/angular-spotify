import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'cut',
})
export class CutPipe implements PipeTransform {
	transform(value: string): string {
		const breakPos = 22
		return value.length <= breakPos
			? value
			: `${value.substring(0, breakPos)} ...`
	}
}
