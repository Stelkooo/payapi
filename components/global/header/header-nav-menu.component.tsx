import Link from 'next/link';

import HeaderCloseButton from './header-close-button.component';
import { TNavItem } from '@/types';

type Props = {
  isMenuOpen: boolean;
  onClickHandler: (open: boolean) => void;
  navItems?: TNavItem[];
};

export default function HeaderNavMenu({
  isMenuOpen,
  onClickHandler,
  navItems,
}: Props) {
  return (
    <div
      className={`${
        isMenuOpen ? 'max-md:flex' : 'max-md:hidden'
      } fixed right-0 top-0 flex h-[100dvh] w-[300px] flex-col gap-11 bg-mirage-blue px-6 py-12 md:static md:h-auto md:w-auto md:flex-1 md:bg-transparent md:p-0`}
    >
      <div className="flex flex-col gap-6 md:hidden">
        <HeaderCloseButton onClickHandler={onClickHandler} />
        <div className="h-[1px] w-full bg-link-water-white bg-opacity-[0.15]" />
      </div>
      <ul className="flex flex-col items-center gap-8 text-[20px] font-bold text-link-water-white text-opacity-70 md:flex-row md:gap-10 md:text-[15px] md:text-san-juan-blue">
        {navItems?.map((item) => (
          <Link href={`/${item.page?.slug?.current}`} key={item._key}>
            {item.title}
          </Link>
        ))}
        <li className="button button--primary max-md:w-full md:ml-auto">
          Schedule a Demo
        </li>
      </ul>
    </div>
  );
}
