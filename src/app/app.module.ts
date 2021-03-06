import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import appRoutes from './app.routes'
import { ShellModule } from './shell/shell.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ShellModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
