import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(2, { message: 'This field cannot be empty' }),
  email: z.string().email({ message: 'Must be a valid email' }),
  company: z.string().min(2, { message: 'This field cannot be empty' }),
  title: z.string().min(2, { message: 'This field cannot be empty' }),
  message: z.string().min(10, { message: 'This field cannot be empty' }),
  updates: z.boolean(),
});

export type Schema = z.infer<typeof schema>;
