import { defineField } from 'sanity';

const TITLE = 'Hero';

export default defineField({
  title: TITLE,
  name: 'heroModule',
  type: 'object',
  fields: [
    defineField({ title: 'Title', name: 'title', type: 'string' }),
    defineField({ title: 'Image', name: 'image', type: 'image' }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title,
        subtitle: TITLE,
        media: image,
      };
    },
  },
});
