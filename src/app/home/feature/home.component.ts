import { Component } from '@angular/core'
import { ImagesApiService } from '../../shell/data-access/api/images-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  images = this.imagesApi.getImages()

  constructor(private readonly imagesApi: ImagesApiService) {}
}
