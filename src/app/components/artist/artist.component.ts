import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.sass'],
})
export class ArtistComponent {
	@Input() artist: any
}
