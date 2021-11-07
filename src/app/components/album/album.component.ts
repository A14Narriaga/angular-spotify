import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.sass'],
})
export class AlbumComponent {
	@Input() song: any
}
