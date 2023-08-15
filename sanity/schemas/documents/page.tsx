import { defineField, defineType } from 'sanity';
import { File } from '@phosphor-icons/react';

import modules from '../modules';

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  groups: [
    { title: 'Editorial', name: 'editorial', default: true },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    modules,
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ slug, title }) {
      return {
        title,
        subtitle: `/${slug}`,
        media: File,
      };
    },
  },
});
