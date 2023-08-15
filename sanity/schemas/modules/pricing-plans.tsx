import { Coins } from '@phosphor-icons/react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Pricing Plans';

export default defineField({
  title: TITLE,
  name: 'pricingPlansModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Plans',
      name: 'plans',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'pricingPlan' }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
        media: <Coins />,
      };
    },
  },
});
