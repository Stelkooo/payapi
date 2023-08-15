import { defineField, defineType } from 'sanity';

const TITLE = 'Default SEO';

export default defineType({
  title: TITLE,
  name: 'seoSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Default Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers',
      validation: (rule) =>
        rule
          .max(50)
          .warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      title: 'Default Meta Description',
      name: 'metaDesc',
      type: 'text',
      rows: 3,
      description: 'Description for search engines',
      validation: (rule) =>
        rule
          .max(150)
          .warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      title: 'Default Share Graphic',
      name: 'shareGraphic',
      type: 'image',
      description: 'Recommended size: 1200x630 (PNG or JPG)',
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
