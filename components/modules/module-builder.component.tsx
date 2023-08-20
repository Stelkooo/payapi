import {
  ICtaModule,
  IContentModule,
  IFeaturesModule,
  IHeroModule,
  ILogosModule,
  IPricingPlansModule,
  IImageModule,
  IStatsModule,
  IContactModule,
} from '@/types';

import HeroModule from './hero-module.component';
import LogosModule from './logos/logos-module.component';
import ContentModule from './content/content-module.component';
import FeaturesModule from './features/features-module.component';
import CtaModule from './cta-module.component';
import PricingPlanModule from './pricing-plans/pricing-plans-module.component';
import ImageModule from './image-module.component';
import StatsModule from './stats/stats-module.component';
import ContactModule from './contact/contact-module.component';

const ModulesMap = {
  heroModule: HeroModule,
  logosModule: LogosModule,
  contentModule: ContentModule,
  featuresModule: FeaturesModule,
  ctaModule: CtaModule,
  pricingPlansModule: PricingPlanModule,
  imageModule: ImageModule,
  statsModule: StatsModule,
  contactModule: ContactModule,
};

type Props =
  | IHeroModule
  | ILogosModule
  | IContentModule
  | IFeaturesModule
  | ICtaModule
  | IPricingPlansModule
  | IImageModule
  | IStatsModule
  | IContactModule;

export default function ModuleBuilder({ ...props }: Props) {
  if (!props._type) throw new Error('Object does not have a "_type" property');

  const Module = ModulesMap[props._type as keyof typeof ModulesMap];
  if (!Module) throw new Error(`Module does not exist - ${Module}`);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Module {...props} />;
}
