// import Image from 'next/image';

import { THome, TSite } from '@/types';
import Header from './header/header.component';
import Footer from './footer/footer.component';

// import BackgroundPatternCircle from '@/public/assets/bg-pattern-circle.svg';

type Props = {
  children: React.ReactNode;
  site?: TSite;
  page?: THome;
};

export default function Layout({ children, page, site }: Props) {
  return (
    <div className="relative overflow-hidden">
      {/* <Image
        src={BackgroundPatternCircle}
        alt=""
        aria-hidden
        className="absolute left-1/2 top-[177px] min-w-[780px] -translate-x-1/2 md:-right-1 md:-top-32 md:left-[unset] md:translate-x-1/2 xl:right-0"
      /> */}
      <Header header={site?.header} />
      <main>{children}</main>
      <Footer footer={site?.footer} />
    </div>
  );
}
