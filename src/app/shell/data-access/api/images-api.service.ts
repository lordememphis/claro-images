import { Injectable } from '@angular/core'
import images from 'src/assets/data/images.data.json'
import { Image } from '../models/image.model'

@Injectable({ providedIn: 'root' })
export class ImagesApiService {
  getImages(): Image[] {
    return images
  }
}
