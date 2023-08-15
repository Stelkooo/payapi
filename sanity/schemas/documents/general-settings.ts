import { defineField, defineType } from 'sanity';

const TITLE = 'General Settings';

export default defineType({
  title: TITLE,
  name: 'generalSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Site Title',
      name: 'title',
      description: 'The name of your site',
      type: 'string',
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
