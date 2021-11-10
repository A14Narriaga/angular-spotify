import { Component, OnInit } from '@angular/core'
import { SpotifyService } from '../../services/spotify.service'

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
	artists: any[]
	currentSearch: string
	loading: boolean

	constructor(private spotifyService: SpotifyService) {
		this.artists = []
		this.loading = false
		this.currentSearch = ''
	}

	ngOnInit(): void {}

	searchArtists = (value: any) => {
		this.loading = true
		this.spotifyService.getArtists(value).subscribe((data: any) => {
			this.artists = data
			this.loading = false
		})
		this.currentSearch = value
	}
}
