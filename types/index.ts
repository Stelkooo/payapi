import { Url } from 'next/dist/shared/lib/router/router';
import { ImageAsset, Slug } from 'sanity';

export type TNavItem = {
  _key?: string;
  title?: string;
  page?: { slug?: Slug };
};

export type THeader = {
  navItems?: TNavItem[];
};

export type TSocialLink = {
  icon?: 'Facebook' | 'Twitter' | 'LinkedIn';
  _key?: string;
  url?: Url;
};

export type TFooter = {
  navItems?: TNavItem[];
  socialLinks?: TSocialLink[];
};

export type TDefaultSeoQuery = {
  metaTitle?: string;
  metaDesc?: string;
  shareGraphic?: string;
};

export type TGeneralSettings = {
  title?: string;
};

export type TSite = {
  header?: THeader;
  footer?: TFooter;
  defaultSeo?: TDefaultSeoQuery;
  general?: TGeneralSettings;
};

type TBaseModule = {
  _type?: string;
  _key?: string;
};

export type TImage = {
  asset: ImageAsset;
};

export interface IHeroModule extends TBaseModule {
  image?: TImage;
  title?: string;
}

export type TCompany = {
  _id?: string;
  name?: string;
  logo?: TImage;
};

export interface ILogosModule extends TBaseModule {
  desc?: string;
  title?: string;
  companies?: TCompany[];
}

export interface IContentModule extends TBaseModule {
  type?: 'CodeContent' | 'ContentMockup' | 'TitleContent';
  image?: TImage;
  title?: string;
  desc?: string;
}

export type TFeature = {
  desc?: string;
  icon?: TImage;
  _key?: string;
  title?: string;
};

export interface IFeaturesModule extends TBaseModule {
  features?: TFeature[];
}

export interface ICtaModule extends TBaseModule {
  title?: string;
}

export type TPlanOption = {
  _key?: string;
  title?: string;
  isIncluded?: boolean;
};

export type TPlan = {
  _id?: string;
  name?: string;
  desc?: string;
  cost?: number;
  options?: TPlanOption[];
};

export interface IPricingPlansModule extends TBaseModule {
  plans?: TPlan[];
}

export type TModules = (
  | IHeroModule
  | IContentModule
  | ICtaModule
  | IFeaturesModule
  | IHeroModule
  | ILogosModule
  | IPricingPlansModule
)[];

export type THome = {
  modules?: TModules;
};

export type THomePage = {
  home?: THome;
  site?: TSite;
};

export type TPage = {
  title?: string;
  slug?: Slug;
  seo?: {
    title?: string;
    desc?: string;
    image?: string;
  };
  modules?: TModules;
};

export type TPagePage = {
  page?: TPage;
  site?: TSite;
};
