import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-artistCard',
	templateUrl: './artistCard.component.html',
	styleUrls: ['./artistCard.component.sass'],
})
export class ArtistCardComponent {
	@Input() artist: any
}
