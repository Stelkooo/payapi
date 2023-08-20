import { IContactModule } from '@/types';
import FormLogos from './form-logos.component';
import Form from './form.component';

export default function ContactModule({ companies, title }: IContactModule) {
  return (
    <section className="mb-20 mt-8">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-20 px-6 xl:flex-row xl:items-center xl:gap-32 xl:px-0">
        <Form />
        <FormLogos companies={companies} title={title} />
      </div>
    </section>
  );
}
