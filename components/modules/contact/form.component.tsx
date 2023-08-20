import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Schema, schema } from './constants';
import FormInput from './form-input.component';

export default function Form() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmitHandler = () => {
    router.push('/');
  };

  return (
    <form
      className="flex flex-col gap-6 md:mx-auto md:max-w-md xl:mx-0 xl:min-w-[28rem]"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <FormInput
        error={errors.name}
        placeholder="Name"
        register={register}
        id="name"
      />
      <FormInput
        error={errors.email}
        placeholder="Email Address"
        register={register}
        id="email"
      />
      <FormInput
        error={errors.company}
        placeholder="Company Name"
        register={register}
        id="company"
      />
      <FormInput
        error={errors.title}
        placeholder="Title"
        register={register}
        id="title"
      />
      <FormInput
        error={errors.message}
        placeholder="Message"
        register={register}
        id="message"
        type="textarea"
      />
      <FormInput
        error={errors.updates}
        placeholder="Stay up-to-date with company announcements and updates to our API"
        register={register}
        id="updates"
        type="checkbox"
      />
      <button type="submit" className="button button--secondary-dark w-fit">
        Submit
      </button>
    </form>
  );
}
