import { defineField, defineType } from 'sanity';
import { File } from '@phosphor-icons/react';

import modules from '../modules';

const TITLE = 'Home Page';

export default defineType({
  title: TITLE,
  name: 'home',
  type: 'document',
  groups: [
    { title: 'Editorial', name: 'editorial', default: true },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    modules,
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
        subtitle: '/',
        media: File,
      };
    },
  },
});
