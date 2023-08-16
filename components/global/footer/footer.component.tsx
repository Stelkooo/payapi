import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/components/shared/logo.component';
import { TFooter } from '@/types';
import FooterSocials from './footer-socials.component';

import BackgroundPatternCircle from '@/public/assets/bg-pattern-circle.svg';

type Props = {
  footer?: TFooter;
};

export default function Footer({ footer }: Props) {
  return (
    <footer className="relative overflow-hidden bg-mirage-blue">
      <Image
        src={BackgroundPatternCircle}
        alt=""
        aria-hidden
        className="absolute left-1/2 top-[177px] min-w-[780px] -translate-x-1/2 md:-right-1 md:-top-32 md:left-[unset] md:translate-x-1/2 xl:right-0"
      />
      <nav className="mx-auto flex max-w-screen-xl flex-col items-center gap-10 py-10 md:flex-row md:gap-16 md:px-10 md:py-8 xl:px-0">
        <Logo />
        <div className="relative">
          <ul className="flex flex-col gap-8 font-bold text-link-water-white text-opacity-70 md:flex-row md:gap-10">
            {footer?.navItems?.map((item) => (
              <Link href={`/${item.page?.slug?.current}`} key={item._key}>
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <FooterSocials socials={footer?.socialLinks} />
      </nav>
    </footer>
  );
}
