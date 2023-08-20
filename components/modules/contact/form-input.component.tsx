/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { Schema } from './constants';
import FormError from './form-error.component';

type Props = {
  error: FieldError | undefined;
  register: UseFormRegister<Schema>;
  placeholder: string;
  type?: 'text' | 'textarea' | 'email' | 'checkbox';
  id: keyof Schema;
};

export default forwardRef(function FormInput(
  { id, placeholder, register, error, type = 'text' }: Props,
  ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>
) {
  if (type === 'textarea')
    return (
      <div className="relative">
        <textarea
          placeholder={placeholder}
          {...register(id)}
          ref={register(id).ref}
          rows={3}
          className={`${
            error?.message
              ? 'border-b-[#f00] text-[#f00] placeholder:text-[#f00]'
              : 'border-b-mirage-blue text-mirage-blue placeholder:text-mirage-blue'
          } w-full resize-none border-b border-opacity-50 bg-transparent px-5 pb-4 text-[15px]/[25px] tracking-[-0.115px] caret-mirage-blue placeholder:text-opacity-50 hover:cursor-pointer`}
        />
        {error?.message ? <FormError message={error.message} /> : null}
      </div>
    );

  if (type === 'checkbox')
    return (
      <label htmlFor={id} className="flex items-center gap-6">
        <div>
          <input
            {...register(id)}
            ref={register(id).ref}
            type={type}
            id={id}
            className="peer/checkbox sr-only appearance-none"
          />
          <div className="h-[24px] w-[24px] bg-mirage-blue bg-opacity-25 bg-center bg-no-repeat hover:cursor-pointer peer-checked/checkbox:bg-dark-pink peer-checked/checkbox:bg-[url('/assets/check.svg')]" />
        </div>
        <span className="text-[15px]/[25px] tracking-[-0.115px] text-mirage-blue">
          {placeholder}
        </span>
      </label>
    );

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        {...register(id)}
        ref={register(id).ref}
        type={type}
        className={`${
          error?.message
            ? 'border-b-[#f00] text-[#f00] placeholder:text-[#f00]'
            : 'border-b-mirage-blue text-mirage-blue placeholder:text-mirage-blue'
        } w-full border-b border-opacity-50 bg-transparent px-5 pb-4 text-[15px]/[25px] tracking-[-0.115px] caret-mirage-blue placeholder:text-opacity-50 hover:cursor-pointer`}
      />
      {error?.message ? <FormError message={error.message} /> : null}
    </div>
  );
});
