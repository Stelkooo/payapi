import { ListChecks } from '@phosphor-icons/react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Features';

export default defineField({
  title: TITLE,
  name: 'featuresModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              title: 'Icon',
              name: 'icon',
              type: 'image',
            }),
            defineField({
              title: 'Title',
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Description',
              name: 'desc',
              type: 'text',
              validation: (rule) => rule.required(),
              rows: 3,
            }),
          ],
        }),
      ],
      validation: (rule) => rule.length(3),
    }),
  ],
  preview: {
    select: {
      features: 'features',
    },
    prepare({ features }) {
      return {
        title: `${features
          .map((feature: { title: string }) => feature.title)
          .join(', ')}`,
        subtitle: TITLE,
        media: <ListChecks />,
      };
    },
  },
});
