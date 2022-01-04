import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import { HeroChevronDownSolid, HeroShoppingCart } from '@ng-icons/heroicons'
import {
  IonLogoFacebook,
  IonLogoTwitter,
  IonLogoYoutube,
} from '@ng-icons/ionicons'

@NgModule({
  declarations: [],
  imports: [
    NgIconsModule.withIcons({
      IonLogoFacebook,
      IonLogoTwitter,
      IonLogoYoutube,
      HeroShoppingCart,
      HeroChevronDownSolid,
    }),
  ],
  exports: [NgIconsModule],
})
export class AppNgIconsModule {}
