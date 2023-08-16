import Image from 'next/image';

import MenuSVG from '@/public/assets/menu.svg';

type Props = {
  onClickHandler: (open: boolean) => void;
};

export default function HeaderHamburgerButton({ onClickHandler }: Props) {
  return (
    <button
      type="button"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={() => onClickHandler(true)}
      className="md:hidden"
    >
      <span className="sr-only">Open main menu</span>
      <Image src={MenuSVG} alt="Hamburger Menu Icon" />
    </button>
  );
}
