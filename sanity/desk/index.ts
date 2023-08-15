import { ListItemBuilder, StructureResolver } from 'sanity/desk';
import { Coins, Users } from '@phosphor-icons/react';

import pageStructure from './page-structure';
import settingsStructure from './settings-structure';

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId();

  if (!id) return false;

  return ![
    'company',
    'footerSettings',
    'generalSettings',
    'headerSettings',
    'home',
    'page',
    'pricingPlan',
    'seoSettings',
  ].includes(id);
};

const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      pageStructure(S, context),
      S.divider(),
      S.listItem()
        .title('Pricing Plans')
        .schemaType('pricingPlan')
        .child(S.documentTypeList('pricingPlan').title('Pricing Plans'))
        .icon(Coins),
      S.listItem()
        .title('Companies')
        .schemaType('company')
        .child(S.documentTypeList('company').title('Companies'))
        .icon(Users),
      S.divider(),
      settingsStructure(S, context),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

export default structure;
