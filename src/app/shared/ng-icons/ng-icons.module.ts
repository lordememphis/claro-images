import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import {
  HeroChevronDownSolid,
  HeroCollection,
  HeroHeart,
  HeroSearch,
  HeroSearchCircle,
  HeroShoppingCart,
  HeroSpeakerphone,
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
    }),
  ],
  exports: [NgIconsModule],
})
export class AppNgIconsModule {}
