import { defineArrayMember, defineField, defineType } from 'sanity';

const TITLE = 'Footer Settings';

export default defineType({
  title: TITLE,
  name: 'footerSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Nav Items',
      name: 'navItems',
      type: 'array',
      of: [defineArrayMember({ type: 'navPage' })],
    }),
    defineField({
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [defineArrayMember({ type: 'socialLink' })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      };
    },
  },
});
