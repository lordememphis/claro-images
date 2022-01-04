import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppNgIconsModule } from '../shared/ng-icons/ng-icons.module'
import { LayoutComponent } from './feature/layout.component'
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component'

@NgModule({
  declarations: [LayoutComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, AppNgIconsModule, RouterModule],
  exports: [LayoutComponent],
})
export class ShellModule {}
