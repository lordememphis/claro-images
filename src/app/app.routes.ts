import { Route } from '@angular/router'
import { LayoutComponent } from './shell/feature/layout.component'

export default [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('./home/home.module')).HomeModule,
      },
    ],
  },
] as Route[]
