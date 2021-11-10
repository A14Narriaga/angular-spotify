import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass'],
})
export class ArtistComponent {
  artist: any = {}
  topTracks: any[] = []
  loading: boolean = true

  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.getArtist(id)
      this.getTopTracks(id)
    })
  }

  getArtist = (id: string) => {
    this.loading = true
    this.spotifyService.getArtist(id).subscribe((data) => {
      this.artist = data
      this.loading = false
    })
  }

  getTopTracks = (id: string) => {
    this.loading = true
    this.spotifyService
      .getTopTracks(id)
      .subscribe((data) => {
        this.topTracks = data
        this.loading = false
      })
  }
}
