import { ICtaModule } from '@/types';
import CTAForm from '../shared/cta-form.component';

export default function CtaModule({ title }: ICtaModule) {
  return (
    <section className="my-20 md:my-[100px] xl:my-24">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-6 md:gap-10 xl:flex-row xl:justify-between xl:px-0">
        <h2 className="h2 text-center">{title}</h2>
        <CTAForm />
      </div>
    </section>
  );
}
