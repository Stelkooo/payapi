import { Check, Coin, X } from '@phosphor-icons/react';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  title: 'Pricing Plans',
  name: 'pricingPlan',
  type: 'document',
  fields: [
    defineField({
      title: 'Plan Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Plan Cost',
      name: 'cost',
      type: 'number',
    }),
    defineField({
      title: 'Plan Options',
      name: 'options',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Option',
          name: 'option',
          type: 'object',
          fields: [
            defineField({
              title: 'Title',
              name: 'title',
              type: 'string',
            }),
            defineField({
              title: 'Is Included?',
              name: 'isIncluded',
              type: 'boolean',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              isIncluded: 'isIncluded',
            },
            prepare({ isIncluded, title }) {
              return {
                title,
                media: isIncluded ? Check : X,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      cost: 'cost',
    },
    prepare({ cost, title }) {
      return {
        title: `${title} Plan`,
        subtitle: `$${cost}.00`,
        media: Coin,
      };
    },
  },
});
