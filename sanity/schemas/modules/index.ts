import { defineArrayMember, defineField } from 'sanity';

export default defineField({
  title: 'Modules',
  name: 'modules',
  type: 'array',
  of: [
    defineArrayMember({ type: 'ctaModule' }),
    defineArrayMember({ type: 'featuresModule' }),
    defineArrayMember({ type: 'pricingPlansModule' }),
    defineArrayMember({ type: 'contentModule' }),
    defineArrayMember({ type: 'statsModule' }),
    defineArrayMember({ type: 'imageModule' }),
    defineArrayMember({ type: 'logosModule' }),
    defineArrayMember({ type: 'heroModule' }),
    defineArrayMember({ type: 'contactModule' }),
  ],
});
