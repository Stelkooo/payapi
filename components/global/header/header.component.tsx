import { useState } from 'react';

import HeaderHamburgerButton from './header-hamburger-button.component';
import Logo from '../../shared/logo.component';
import HeaderNavMenu from './header-nav-menu.component';
import { THeader } from '@/types';

type Props = {
  header?: THeader;
};

export default function Header({ header }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = (open: boolean) => {
    setIsMenuOpen(open);
  };

  return (
    <header className="relative">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-10 md:gap-16 md:px-10 xl:px-0">
        <Logo />
        <HeaderHamburgerButton onClickHandler={menuHandler} />
        <HeaderNavMenu
          isMenuOpen={isMenuOpen}
          onClickHandler={menuHandler}
          navItems={header?.navItems}
        />
      </nav>
    </header>
  );
}
