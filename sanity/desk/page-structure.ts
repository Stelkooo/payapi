import { ListItemBuilder } from 'sanity/desk';
import { Files, Folder, House } from '@phosphor-icons/react';

import defineStructure from '../utils/define-structure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Pages')
    .id('pages')
    .child(
      S.list()
        .title('Pages')
        .items([
          S.listItem()
            .title('Home')
            .child(S.editor().id('home').schemaType('home').documentId('home'))
            .icon(House),
          S.divider(),
          S.listItem()
            .title('Other Pages')
            .schemaType('page')
            .child(S.documentTypeList('page').title('Other Pages'))
            .icon(Files),
        ])
    )
    .icon(Folder)
);
