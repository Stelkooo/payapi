import { CodeBlock, DeviceMobile, TextColumns } from '@phosphor-icons/react';
import { defineField } from 'sanity';

const TITLE = 'Content';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'TitleContent':
      return TextColumns;
    case 'CodeContent':
      return CodeBlock;
    case 'ContentMockup':
      return DeviceMobile;
    default:
      return false;
  }
};

export default defineField({
  title: TITLE,
  name: 'contentModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Type',
      name: 'type',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: 'Code / Content', value: 'CodeContent' },
          { title: 'Content / Mockup', value: 'ContentMockup' },
          { title: 'Title / Content', value: 'TitleContent' },
        ],
      },
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
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      hidden: ({ parent }) => parent.type === 'TitleContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
    },
    prepare({ title, type }) {
      return {
        title,
        subtitle: TITLE,
        media: getIcon(type),
      };
    },
  },
});
