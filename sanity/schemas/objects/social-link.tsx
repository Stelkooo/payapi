import { FacebookLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react';
import { defineField } from 'sanity';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'Facebook':
      return FacebookLogo;
    case 'LinkedIn':
      return LinkedinLogo;
    case 'Twitter':
      return TwitterLogo;
    default:
      return false;
  }
};

export default defineField({
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  options: {
    columns: 2,
    collapsible: false,
  },
  fields: [
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'Facebook' },
          { title: 'LinkedIn', value: 'LinkedIn' },
          { title: 'Twitter', value: 'Twitter' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      icon: 'icon',
      url: 'url',
    },
    prepare({ icon, url }) {
      return {
        title: icon,
        subtitle: url || '(URL Not Set)',
        media: getIcon(icon),
      };
    },
  },
});
