import { Url } from 'next/dist/shared/lib/router/router';
import { Image, Slug } from 'sanity';

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

export interface IHeroModule extends TBaseModule {
  image?: Image;
  title?: string;
}

export type TCompany = {
  _id?: string;
  name?: string;
  logo?: Image;
};

export interface ILogosModule extends TBaseModule {
  desc?: string;
  title?: string;
  companies?: TCompany[];
}

export interface IContentModule extends TBaseModule {
  type?: 'CodeContent' | 'ContentMockup' | 'TitleContent';
  image?: Image;
  title?: string;
  desc?: string;
}

export type TFeature = {
  desc?: string;
  icon?: Image;
  _key?: string;
  title?: string;
};

export interface IFeaturesModule extends TBaseModule {
  features?: TFeature[];
}

export interface ICtaModule extends TBaseModule {
  title?: string;
  formInput?: {
    btnTxt?: string;
    placeholder?: string;
  };
}

export type TModules = (
  | IHeroModule
  | IContentModule
  | ICtaModule
  | IFeaturesModule
  | IHeroModule
  | ILogosModule
)[];

export type THome = {
  modules?: TModules;
};

export type THomePage = {
  home?: THome;
  site?: TSite;
};
