import { Component, HostListener } from '@angular/core'
import {
  slideInLeftOnEnterAnimation,
  slideOutLeftOnLeaveAnimation,
} from 'angular-animations'

@Component({
  selector: 'ci-header',
  templateUrl: './header.component.html',
  animations: [
    slideInLeftOnEnterAnimation({ duration: 200 }),
    slideOutLeftOnLeaveAnimation({ duration: 200 }),
  ],
})
export class HeaderComponent {
  mobileMenuOpen = false
  floatNav = false

  @HostListener('document:scroll')
  floatOnScroll(): void {
    this.floatNav =
      document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
  }
}
