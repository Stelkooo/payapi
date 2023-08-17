import Link from 'next/link';

import { IHeroModule } from '@/types';
import Photo from '../shared/photo.component';
import CTAForm from '../shared/cta-form.component';

export default function HeroModule({ image, title }: IHeroModule) {
  return (
    <section>
      <div className="mx-auto grid max-w-[327px] grid-flow-row gap-y-6 pb-20 md:max-w-xl md:gap-y-12 md:pb-24 xl:max-w-screen-xl xl:grid-cols-2 xl:grid-rows-1">
        <div className="mx-auto xl:col-start-2 xl:mr-24">
          {image && (
            <Photo
              image={image}
              className="w-[128px] md:w-[156px] xl:w-[258px]"
            />
          )}
        </div>
        <div className="space-y-6 text-center xl:row-start-1 xl:self-center xl:text-left">
          <h1 className="h1--large">{title}</h1>
          <div className="space-y-6 md:space-y-4">
            <CTAForm />
            <p className="text-[15px] text-light-san-juan-blue">
              Have any question?{' '}
              <Link href="/contact" className="font-bold">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
