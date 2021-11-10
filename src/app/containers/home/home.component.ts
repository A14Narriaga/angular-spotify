import { SpotifyService } from '../../services/spotify.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = []
  loading: boolean = true
  error: string = ''
  itemsForPage = 6
  numOfPages: number = 0
  currentPage: number = 1
  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data
      this.numOfPages = Math.ceil(data.length / this.itemsForPage)
      this.loading = false
    }, (error) => {
      console.log(error);
      this.error = error.error.error.message
      this.loading = false
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ({ pag }) => (this.currentPage = pag)
    )
  }
}
