import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-album',
	templateUrl: './albumCard.component.html',
	styleUrls: ['./albumCard.component.sass'],
})
export class AlbumCardComponent {
	@Input() album: any
}
