import { defineField } from 'sanity';

const TITLE = 'Image';

export default defineField({
  title: TITLE,
  name: 'imageModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Mobile Image',
      name: 'mobileImage',
      type: 'image',
    }),
    defineField({
      title: 'Tablet Image',
      name: 'tabletImage',
      type: 'image',
    }),
    defineField({
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      mobileImg: 'mobileImage',
    },
    prepare({ mobileImg }) {
      return {
        title: TITLE,
        media: mobileImg,
      };
    },
  },
});
