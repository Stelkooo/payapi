import { LinkSimpleHorizontal } from '@phosphor-icons/react';
import { defineField } from 'sanity';

export default defineField({
  title: 'Navigation Page',
  name: 'navPage',
  description: 'Navigation link to another internal page',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      description: 'Name of link which users will see and click on',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Page Reference',
      name: 'page',
      description: 'Reference to internal page you wish to link to',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'home' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'page.slug.current',
    },
    prepare({ slug, title }) {
      return {
        title,
        subtitle: `/${slug || ''}`,
        media: LinkSimpleHorizontal,
      };
    },
  },
});
