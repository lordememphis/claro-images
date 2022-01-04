import { Route } from '@angular/router'
import { LayoutComponent } from './shell/feature/layout.component'

export default [
  { path: '', component: LayoutComponent, children: [] },
] as Route[]
