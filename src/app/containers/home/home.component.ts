import { SpotifyService } from '../../services/spotify/spotify.service'
import { AfterViewInit, Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, AfterViewInit {
	newReleases: any[] = []
	loading: boolean = true
	itemsForPage = 4
	numOfPages: number = 0
	currentPage: number = 1
	constructor(
		private spotifyService: SpotifyService,
		private activatedRoute: ActivatedRoute
	) {}

	ngAfterViewInit(): void {
		this.spotifyService.getNewReleases().subscribe((data: any) => {
			this.newReleases = data
			this.numOfPages = Math.ceil(data.length / this.itemsForPage)
			this.loading = false
		})
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(
			({ pag }) => (this.currentPage = pag)
		)
	}
}
