import { CursorClick } from '@phosphor-icons/react';
import { defineField } from 'sanity';

const TITLE = 'CTA';

export default defineField({
  title: TITLE,
  name: 'ctaModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
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
        media: <CursorClick />,
      };
    },
  },
});
