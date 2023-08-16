import Image from 'next/image';

import CloseSVG from '@/public/assets/close.svg';

type Props = {
  onClickHandler: (open: boolean) => void;
};

export default function HeaderCloseButton({ onClickHandler }: Props) {
  return (
    <button
      type="button"
      aria-controls="navbar-default"
      aria-expanded="true"
      onClick={() => onClickHandler(false)}
      className="self-end"
    >
      <span className="sr-only">Close main menu</span>
      <Image src={CloseSVG} alt="Close Menu Icon" />
    </button>
  );
}
