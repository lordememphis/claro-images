import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { Component, OnInit } from '@angular/core'
import { ImagesApiService } from '../../shell/data-access/api/images-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  images = this.imagesApi.getImages()
  searchIconSize!: string

  constructor(
    private readonly imagesApi: ImagesApiService,
    public readonly breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.searchIconSize = state.matches ? '32' : '20'
      })
  }
}
