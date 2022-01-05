import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import {
  HeroChevronDownSolid,
  HeroCollection,
  HeroHeart,
  HeroMenuAlt2,
  HeroSearch,
  HeroSearchCircle,
  HeroShoppingCart,
  HeroSpeakerphone,
  HeroX,
} from '@ng-icons/heroicons'
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
      HeroSearch,
      HeroCollection,
      HeroSearchCircle,
      HeroSpeakerphone,
      HeroHeart,
      HeroX,
      HeroMenuAlt2,
    }),
  ],
  exports: [NgIconsModule],
})
export class AppNgIconsModule {}
