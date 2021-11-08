import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-artist',
	templateUrl: './artistCard.component.html',
	styleUrls: ['./artistCard.component.sass'],
})
export class ArtistCardComponent {
	@Input() artist: any
}
