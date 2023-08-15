import { Users } from '@phosphor-icons/react';
import { defineField } from 'sanity';

const TITLE = 'Logos';

export default defineField({
  title: TITLE,
  name: 'logosModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'desc',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Companies',
      name: 'companies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'company' }] }],
      validation: (rule) => rule.length(6),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: TITLE,
        media: Users,
      };
    },
  },
});
