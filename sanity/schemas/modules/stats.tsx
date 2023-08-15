import { ChartLineUp, TrendUp } from '@phosphor-icons/react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Stats';

const getSuffix = (type: string) => {
  switch (type) {
    case 'Nothing':
      return '';
    case 'Plus':
      return '+';
    case 'Million':
      return 'M+';
    default:
      return false;
  }
};

export default defineField({
  title: TITLE,
  name: 'statsModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Stats',
      name: 'stats',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Stat',
          name: 'stat',
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Number',
              name: 'number',
              type: 'number',
            }),
            defineField({
              title: 'Type',
              name: 'type',
              type: 'string',
              options: {
                list: [
                  { title: 'Plus', value: 'Plus' },
                  { title: 'Nothing', value: 'Nothing' },
                  { title: 'Million', value: 'Million' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              name: 'name',
              number: 'number',
              type: 'type',
            },
            prepare({ name, number, type }) {
              return {
                title: `${number}${getSuffix(type)}`,
                subtitle: name,
                media: TrendUp,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      stats: 'stats',
    },
    prepare({ stats }) {
      return {
        title: `${stats.map((stat: { name: string }) => stat.name).join(', ')}`,
        subtitle: TITLE,
        media: ChartLineUp,
      };
    },
  },
});
