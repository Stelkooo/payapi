import { ListItemBuilder } from 'sanity/desk';
import {
  AnchorSimple,
  Gear,
  Globe,
  NavigationArrow,
} from '@phosphor-icons/react';

import defineStructure from '../utils/define-structure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Settings')
    .id('settings')
    .child(
      S.list()
        .title('Settings')
        .items([
          S.listItem()
            .title('General')
            .child(
              S.editor()
                .id('generalSettings')
                .schemaType('generalSettings')
                .documentId('generalSettings')
            )
            .icon(Gear),
          S.divider(),
          S.listItem()
            .title('Header')
            .child(
              S.editor()
                .id('headerSettings')
                .schemaType('headerSettings')
                .documentId('headerSettings')
            )
            .icon(NavigationArrow),
          S.listItem()
            .title('Footer')
            .child(
              S.editor()
                .id('footerSettings')
                .schemaType('footerSettings')
                .documentId('footerSettings')
            )
            .icon(AnchorSimple),
          S.divider(),
          S.listItem()
            .title('Default SEO')
            .child(
              S.editor()
                .id('seoSettings')
                .schemaType('seoSettings')
                .documentId('seoSettings')
            )
            .icon(Globe),
        ])
    )
    .icon(Gear)
);
