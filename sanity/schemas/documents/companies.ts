import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Companies',
  name: 'company',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({ title: 'Logo', name: 'logo', type: 'image' }),
  ],
});
