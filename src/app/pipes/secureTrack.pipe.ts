import {
  Pipe,
  PipeTransform,
} from '@angular/core'
import {
  DomSanitizer,
  SafeResourceUrl,
} from '@angular/platform-browser'

@Pipe({
  name: 'secureTrack',
})
export class SecureTrackPipe
  implements PipeTransform {
  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  transform(
    value: string
  ): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://open.spotify.com/embed?uri=' + value
    )
  }
}
