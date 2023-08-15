import { defineArrayMember, defineField, defineType } from 'sanity';

const TITLE = 'Footer Settings';

export default defineType({
  title: TITLE,
  name: 'headerSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Navigation Items',
      name: 'navItems',
      description:
        'Links to internal pages displayed in header on the top of the page',
      type: 'array',
      of: [defineArrayMember({ type: 'navPage' })],
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
