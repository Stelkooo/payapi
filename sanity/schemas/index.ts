import { type SchemaTypeDefinition } from 'sanity';

import companies from './documents/companies';
import footer from './documents/footer';
import generalSettings from './documents/general-settings';
import header from './documents/header';
import home from './documents/home';
import page from './documents/page';
import plan from './documents/plan';
import seoSettings from './documents/seo-settings';

import contact from './modules/contact';
import content from './modules/content';
import cta from './modules/cta';
import features from './modules/features';
import hero from './modules/hero';
import image from './modules/image';
import logos from './modules/logos';
import pricingPlans from './modules/pricing-plans';
import stats from './modules/stats';

import navPage from './objects/nav-page';
import seo from './objects/seo';
import socialLink from './objects/social-link';

const documents = [page, plan];

const singletons = [
  companies,
  footer,
  generalSettings,
  header,
  home,
  seoSettings,
];

const modules = [
  contact,
  content,
  cta,
  features,
  hero,
  image,
  logos,
  pricingPlans,
  stats,
];

const objects = [navPage, seo, socialLink];

const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...singletons, ...modules, ...objects],
};

export default schema;
