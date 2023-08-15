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
    defineField({
      title: 'Form Input',
      name: 'formInput',
      type: 'object',
      fields: [
        defineField({
          title: 'Placeholder',
          name: 'placeholder',
          type: 'string',
        }),
        defineField({ title: 'Button Text', name: 'btnTxt', type: 'string' }),
      ],
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
