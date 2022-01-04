import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppNgIconsModule } from '../shared/ng-icons/ng-icons.module'
import { HomeComponent } from './feature/home.component'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    AppNgIconsModule,
  ],
})
export class HomeModule {}
