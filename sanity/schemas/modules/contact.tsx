import { PhoneCall } from '@phosphor-icons/react';
import { defineField } from 'sanity';

const TITLE = 'Contact';

export default defineField({
  title: TITLE,
  name: 'contactModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
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
        media: PhoneCall,
      };
    },
  },
});
