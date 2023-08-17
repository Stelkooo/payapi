import Link from 'next/link';
import Image from 'next/image';

import { ILogosModule } from '@/types';
import CompanyLogos from './company-logos.component';
import BackgroundPatternCircle from '@/public/assets/bg-pattern-circle.svg';

export default function LogosModule({ companies, desc, title }: ILogosModule) {
  return (
    <section className="relative overflow-hidden bg-mirage-blue">
      <Image
        src={BackgroundPatternCircle}
        alt=""
        aria-hidden
        className="absolute -top-[84%] left-1/2 min-w-[780px] -translate-x-1/2 xl:-left-48 xl:bottom-[51px] xl:top-[unset] xl:translate-x-0"
      />
      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-14 px-6 py-20 md:gap-16 md:py-[90px] xl:flex-row-reverse xl:px-0 xl:py-[100px]">
        <CompanyLogos companies={companies} />
        <div className="flex flex-col items-center gap-[60px] text-center md:mx-auto md:max-w-md md:gap-8 xl:items-start xl:text-left">
          <div className="space-y-4 md:space-y-6">
            <h2 className="h2 text-link-water-white">{title}</h2>
            <p className="text-link-water-white text-opacity-70">{desc}</p>
          </div>
          <Link href="/about" className="button button--secondary-light w-fit">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
