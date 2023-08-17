import {
  ICtaModule,
  IContentModule,
  IFeaturesModule,
  IHeroModule,
  ILogosModule,
} from '@/types';

import HeroModule from './hero-module.component';
import LogosModule from './logos-module.component';
import ContentModule from './content-module.component';
import FeaturesModule from './features-module.component';
import CtaModule from './cta-module.component';

const ModulesMap = {
  heroModule: HeroModule,
  logosModule: LogosModule,
  contentModule: ContentModule,
  featuresModule: FeaturesModule,
  ctaModule: CtaModule,
};

type Props =
  | IHeroModule
  | ILogosModule
  | IContentModule
  | IFeaturesModule
  | ICtaModule;

export default function ModuleBuilder({ ...props }: Props) {
  if (!props._type) throw new Error('Object does not have a "_type" property');

  const Module = ModulesMap[props._type as keyof typeof ModulesMap];
  if (!Module) throw new Error(`Module does not exist - ${Module}`);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Module {...props} />;
}
